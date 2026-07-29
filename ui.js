function updateUI() {
  document.getElementById('xpTotal').textContent = STATE.totalXP;
  document.getElementById('userLevel').textContent = STATE.level;
  document.getElementById('testsCompleted').textContent = STATE.testsCompleted;
  document.getElementById('streakBadge').textContent = `🔥 День ${STATE.streak}`;
  const xpInLevel = STATE.totalXP % 100;
  document.getElementById('xpMiniFill').style.width = (xpInLevel/100*100) + '%';
}

function renderTests(category='all') {
  const grid = document.getElementById('testsGrid');
  const filtered = category === 'all' ? TESTS_DB : TESTS_DB.filter(t => t.category === category);
  grid.innerHTML = filtered.map(test => `
    <div class="test-card" onclick="startTest('${test.id}')">
      <div class="test-emoji">${test.emoji}</div>
      <div class="test-title">${test.title}</div>
      <div class="test-meta">
        <span>📝 ${test.questionsCount} вопр.</span>
        ${test.badges.map(b => `<span class="test-badge ${b}">${b==='hot'?'🔥 Хит':'✨ Новое'}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

document.getElementById('categoryNav').addEventListener('click', e => {
  if (e.target.classList.contains('cat-btn')) {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    renderTests(e.target.dataset.category);
  }
});

// Фоновые частицы
(function initParticles() {
  const canvas = document.getElementById('particlesCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  function resize() { canvas.width = innerWidth; canvas.height = innerHeight; }
  resize(); addEventListener('resize', resize);
  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random()*canvas.width; this.y = Math.random()*canvas.height;
      this.size = Math.random()*2+0.5;
      this.speedX = (Math.random()-0.5)*0.4; this.speedY = (Math.random()-0.5)*0.4;
      this.opacity = Math.random()*0.5+0.1;
      this.color = Math.random()>0.5?'124,58,237':'6,182,212';
    }
    update() {
      this.x += this.speedX; this.y += this.speedY;
      if(this.x<0||this.x>canvas.width||this.y<0||this.y>canvas.height) this.reset();
    }
    draw() {
      ctx.beginPath(); ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
      ctx.fillStyle = `rgba(${this.color},${this.opacity})`;
      ctx.shadowBlur=8; ctx.shadowColor=`rgba(${this.color},${this.opacity*2})`;
      ctx.fill(); ctx.shadowBlur=0;
    }
  }
  for(let i=0;i<50;i++) particles.push(new Particle());
  function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    for(let i=0;i<particles.length;i++) {
      for(let j=i+1;j<particles.length;j++) {
        const dx=particles[i].x-particles[j].x, dy=particles[i].y-particles[j].y;
        const dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<120) {
          ctx.beginPath(); ctx.moveTo(particles[i].x,particles[i].y); ctx.lineTo(particles[j].x,particles[j].y);
          ctx.strokeStyle=`rgba(124,58,237,${0.06*(1-dist/120)})`; ctx.lineWidth=0.5; ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
})();

updateUI();
renderTests('all');
console.log('🚀 ТвойТип готов! 12 тестов.');