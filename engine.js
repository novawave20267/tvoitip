const STATE = {
  totalXP: 0,
  level: 1,
  testsCompleted: 0,
  streak: 1,
  lastActiveDate: null,
  achievementsUnlocked: [],
  testHistory: [],
  currentTest: null,
  currentQuestionIndex: 0,
  answers: [],
  timerInterval: null,
  timeLeft: 0,
};

function loadState() {
  const saved = localStorage.getItem('tvoitip_state');
  if (saved) {
    try { Object.assign(STATE, JSON.parse(saved)); } catch(e){}
  }
  updateStreak();
  saveState();
}

function saveState() {
  const toSave = {
    totalXP: STATE.totalXP, level: STATE.level, testsCompleted: STATE.testsCompleted,
    streak: STATE.streak, lastActiveDate: STATE.lastActiveDate,
    achievementsUnlocked: STATE.achievementsUnlocked, testHistory: STATE.testHistory.slice(-50)
  };
  localStorage.setItem('tvoitip_state', JSON.stringify(toSave));
}

function updateStreak() {
  const today = new Date().toDateString();
  if (!STATE.lastActiveDate) { STATE.streak = 1; }
  else if (STATE.lastActiveDate === today) { /* уже сегодня */ }
  else {
    const yesterday = new Date(Date.now()-86400000).toDateString();
    STATE.streak = (STATE.lastActiveDate === yesterday) ? STATE.streak+1 : 1;
  }
  STATE.lastActiveDate = today;
}

function addXP(amount) {
  STATE.totalXP += amount;
  const newLevel = Math.floor(STATE.totalXP/100)+1;
  if (newLevel > STATE.level) {
    STATE.level = newLevel;
    showAchievement('⬆️', 'Новый уровень!', `Уровень ${STATE.level}`);
  }
  updateUI();
  checkAchievements();
  saveState();
}

function checkAchievements() {
  for (const ach of ACHIEVEMENTS) {
    if (!STATE.achievementsUnlocked.includes(ach.id) && ach.condition(STATE)) {
      STATE.achievementsUnlocked.push(ach.id);
      addXP(ach.xp);
      showAchievement(ach.emoji, ach.title, ach.sub);
    }
  }
}

function showAchievement(emoji, title, sub) {
  document.getElementById('achEmoji').textContent = emoji;
  document.getElementById('achTitle').textContent = title;
  document.getElementById('achSub').textContent = sub;
  const toast = document.getElementById('achievementToast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

function startTest(testId) {
  const test = TESTS_DB.find(t => t.id === testId);
  if (!test) return;
  STATE.currentTest = test;
  STATE.currentQuestionIndex = 0;
  STATE.answers = [];
  STATE.timeLeft = test.timeLimit || 0;

  document.getElementById('homeScreen').classList.add('hidden');
  document.getElementById('resultScreen').classList.remove('active');
  document.getElementById('resultScreen').classList.add('hidden');
  document.getElementById('quizScreen').classList.remove('hidden');
  document.getElementById('quizScreen').classList.add('active');

  if (STATE.timeLeft > 0) {
    document.getElementById('quizTimer').classList.remove('hidden');
    updateTimerDisplay();
    clearTimer();
    STATE.timerInterval = setInterval(() => {
      STATE.timeLeft--;
      updateTimerDisplay();
      if (STATE.timeLeft <= 0) { clearTimer(); finishTest(); }
    }, 1000);
  } else {
    document.getElementById('quizTimer').classList.add('hidden');
  }
  renderQuestion();
  updateQuizProgress();
  window.scrollTo({top:0, behavior:'smooth'});
}

function renderQuestion() {
  const test = STATE.currentTest;
  const q = test.questions[STATE.currentQuestionIndex];
  const container = document.getElementById('questionContainer');
  let html = '';
  if (q.type === 'slider') {
    html = `<div class="slider-container">
      <div class="slider-labels"><span>${q.labels[0]}</span><span>${q.labels[1]}</span></div>
      <input type="range" class="slider-input" min="${q.min}" max="${q.max}" value="${Math.floor((q.min+q.max)/2)}" id="sliderInput" oninput="document.getElementById('sliderVal').textContent=this.value">
      <div class="slider-value" id="sliderVal">${Math.floor((q.min+q.max)/2)}</div>
      <button class="btn btn-primary" style="width:100%;margin-top:16px;" onclick="submitSliderAnswer()">Подтвердить →</button>
    </div>`;
  } else {
    html = `<div class="answers-list">${q.answers.map((a,i) => `
      <button class="answer-btn" onclick="submitChoiceAnswer(${i},this)">${a.text}</button>
    `).join('')}</div>`;
  }
  container.innerHTML = `<div class="question-card">
    <div class="question-number">ВОПРОС ${STATE.currentQuestionIndex+1} ИЗ ${test.questions.length}</div>
    <div class="question-text">${q.question}</div>
    ${q.image ? `<img src="${q.image}" class="question-image" alt="">` : ''}
    ${html}
  </div>`;
}

function submitChoiceAnswer(index, btn) {
  document.querySelectorAll('.answer-btn').forEach(b => b.classList.remove('selected'));
  if (btn) btn.classList.add('selected');
  STATE.answers.push(STATE.currentTest.questions[STATE.currentQuestionIndex].answers[index].value);
  setTimeout(() => nextQuestion(), 200);
}

function submitSliderAnswer() {
  const slider = document.getElementById('sliderInput');
  STATE.answers.push(parseInt(slider.value));
  nextQuestion();
}

function nextQuestion() {
  STATE.currentQuestionIndex++;
  if (STATE.currentQuestionIndex >= STATE.currentTest.questions.length) {
    finishTest();
  } else {
    renderQuestion();
    updateQuizProgress();
    // реклама в середине теста отключена, чтобы не ломать вёрстку
  }
}

function updateQuizProgress() {
  const test = STATE.currentTest;
  const progress = (STATE.currentQuestionIndex / test.questions.length) * 100;
  document.getElementById('quizProgressFill').style.width = progress + '%';
  document.getElementById('quizProgressText').textContent = `Вопрос ${STATE.currentQuestionIndex+1} из ${test.questions.length}`;
}

function updateTimerDisplay() {
  const m = Math.floor(STATE.timeLeft/60), s = STATE.timeLeft%60;
  document.getElementById('quizTimer').textContent = `⏱ ${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

function clearTimer() { if (STATE.timerInterval) { clearInterval(STATE.timerInterval); STATE.timerInterval=null; } }

function finishTest() {
  clearTimer();
  const test = STATE.currentTest;
  let result;
  if (test.calcResult) {
    const key = test.calcResult(STATE.answers);
    result = test.results.find(r => r.key === key);
  } else {
    const score = STATE.answers.reduce((sum, v) => sum + (typeof v === 'number' ? v : 0), 0);
    result = test.results.find(r => score >= r.range[0] && score < r.range[1]);
    if (!result) result = test.results[test.results.length-1];
    STATE.lastScore = score;
    STATE.lastTotal = test.questions.filter(q => q.type === 'choice').length;
  }
  STATE.testHistory.push({
    testId: test.id,
    testTitle: test.title,
    resultTitle: result.title,
    resultEmoji: result.emoji,
    date: new Date().toISOString()
  });
  STATE.testsCompleted++;
  const xpEarned = test.difficulty === 'hard' ? 80 : test.difficulty === 'medium' ? 50 : 30;
  addXP(xpEarned);

  document.getElementById('quizScreen').classList.remove('active');
  document.getElementById('quizScreen').classList.add('hidden');
  document.getElementById('resultScreen').classList.add('active');
  document.getElementById('resultScreen').classList.remove('hidden');

  let scoreHTML = '';
  if (test.showScore && !test.calcResult) {
    scoreHTML = `<div class="result-score">Вы набрали ${STATE.lastScore} из ${STATE.lastTotal} баллов</div>`;
  }

  document.getElementById('resultCard').innerHTML = `
    <div class="result-emoji">${result.emoji}</div>
    <div class="result-title">${result.title}</div>
    ${scoreHTML}
    <div class="result-description">${result.description}</div>
    <div class="result-xp">+${xpEarned} XP ⭐</div>
  `;
  updateUI();
  checkAchievements();
  saveState();
  window.scrollTo({top:0, behavior:'smooth'});
}

function goHome() {
  clearTimer();
  document.getElementById('homeScreen').classList.remove('hidden');
  document.getElementById('quizScreen').classList.remove('active'); document.getElementById('quizScreen').classList.add('hidden');
  document.getElementById('resultScreen').classList.remove('active'); document.getElementById('resultScreen').classList.add('hidden');
  STATE.currentTest = null; STATE.answers = [];
  updateUI();
  window.scrollTo({top:0, behavior:'smooth'});
}

function retakeTest() { if (STATE.currentTest) startTest(STATE.currentTest.id); }

function shareResult() {
  const title = document.querySelector('.result-title')?.textContent || '';
  const emoji = document.querySelector('.result-emoji')?.textContent || '';
  const text = `${emoji} Мой результат: ${title}! Пройди тест на ТвойТип: ` + window.location.href;
  if (navigator.share) { navigator.share({title:'Результат теста',text:text,url:window.location.href}).catch(()=>{}); }
  else { navigator.clipboard.writeText(text).then(()=> showAchievement('📋','Скопировано!','Отправь другу')); }
}

loadState();
