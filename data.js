const TESTS_DB = [
  // ========== IQ (исправлен) ==========
  {
    id: 'iq-classic',
    title: '🎯 Точный тест на IQ',
    category: 'iq',
    emoji: '🧠',
    questionsCount: 10,
    timeLimit: 300,
    difficulty: 'hard',
    badges: ['hot'],
    showScore: true,
    questions: [
      { type:'choice', question:'Сколько месяцев в году имеют 28 дней?', answers:[
        {text:'1', value:0},{text:'12', value:1},{text:'0', value:0},{text:'6', value:0}
      ]},
      { type:'choice', question:'Какое число продолжит ряд: 2, 6, 12, 20, 30, ...?', answers:[
        {text:'38', value:0},{text:'42', value:1},{text:'36', value:0},{text:'48', value:0}
      ]},
      { type:'choice', question:'Если все А есть Б, и некоторые Б есть В, то:', answers:[
        {text:'Все А есть В', value:0},{text:'Некоторые А могут быть В', value:1},{text:'Ни одно А не есть В', value:0},{text:'Все В есть А', value:0}
      ]},
      { type:'choice', question:'Врач даёт вам 3 таблетки и говорит принимать по одной каждые полчаса. На сколько хватит?', answers:[
        {text:'1 час', value:1},{text:'1.5 часа', value:0},{text:'3 часа', value:0},{text:'30 минут', value:0}
      ]},
      { type:'choice', question:'Какая фигура лишняя? Круг, Квадрат, Треугольник, Сфера', answers:[
        {text:'Круг', value:0},{text:'Квадрат', value:0},{text:'Треугольник', value:0},{text:'Сфера (3D)', value:1}
      ]},
      { type:'choice', question:'Если перевернуть число 1961, что получится?', answers:[
        {text:'1691', value:0},{text:'1961', value:1},{text:'1916', value:0},{text:'1696', value:0}
      ]},
      { type:'choice', question:'Какое слово не вписывается: Яблоко, Банан, Морковь, Груша', answers:[
        {text:'Яблоко', value:0},{text:'Банан', value:0},{text:'Морковь (овощ)', value:1},{text:'Груша', value:0}
      ]},
      { type:'choice', question:'Поезд движется со скоростью 90 км/ч. Сколько метров он проходит за 1 секунду?', answers:[
        {text:'15 м', value:0},{text:'25 м', value:1},{text:'90 м', value:0},{text:'250 м', value:0}
      ]},
      { type:'choice', question:'Какой из этих вариантов является реальным психологическим феноменом?', answers:[
        {text:'Эффект Даннинга-Крюгера', value:1},{text:'Синдром Зигмунда-Фрейда', value:0},{text:'Парадокс Ньютона-Эйнштейна', value:0},{text:'Закон Мёрфи-Брауна', value:0}
      ]},
      { type:'choice', question:'Сколько будет 2 + 2 * 2?', answers:[
        {text:'6', value:1},{text:'8', value:0},{text:'4', value:0},{text:'10', value:0}
      ]}
    ],
    results: [
      { range:[0,4], title:'🌱 Начинающий мыслитель', description:'Вы пока в начале пути. Тренируйте логику регулярно.', emoji:'🌱', color:'#10b981' },
      { range:[4,7], title:'🧠 Средний уровень', description:'Неплохо! Вы способны решать большинство повседневных задач.', emoji:'🧠', color:'#06b6d4' },
      { range:[7,9], title:'🔥 Острый ум', description:'Отличный результат! Ваша логика выше среднего.', emoji:'🔥', color:'#f59e0b' },
      { range:[9,11], title:'👑 Гений логики', description:'Потрясающе! Вы видите закономерности мгновенно.', emoji:'👑', color:'#f59e0b' }
    ]
  },
  // ========== GOT (без изменений) ==========
  {
    id:'got-character', title:'⚔️ Кто ты из Игры Престолов?', category:'character', emoji:'🐉', questionsCount:8, timeLimit:0, difficulty:'easy', badges:['hot','new'],
    questions:[
      { type:'choice', question:'Что для вас важнее всего?', answers:[
        {text:'Семья и честь', value:'stark'},{text:'Власть и контроль', value:'lannister'},{text:'Свобода и приключения', value:'targaryen'},{text:'Знания и мудрость', value:'maester'}
      ]},
      { type:'choice', question:'Как вы решаете конфликты?', answers:[
        {text:'Дипломатией', value:'tyrion'},{text:'Прямой конфронтацией', value:'stark'},{text:'Хитростью', value:'lannister'},{text:'Огнём и кровью', value:'targaryen'}
      ]},
      { type:'choice', question:'Ваше отношение к предательству?', answers:[
        {text:'Никогда не прощаю', value:'stark'},{text:'Это часть игры', value:'lannister'},{text:'Предаю первым', value:'littlefinger'},{text:'Стараюсь понять', value:'tyrion'}
      ]},
      { type:'choice', question:'Какое животное вам ближе?', answers:[
        {text:'Волк', value:'stark'},{text:'Лев', value:'lannister'},{text:'Дракон', value:'targaryen'},{text:'Ворон', value:'maester'}
      ]},
      { type:'choice', question:'Ваш идеальный вечер?', answers:[
        {text:'У камина с семьёй', value:'stark'},{text:'Бал во дворце', value:'lannister'},{text:'Полёт на драконе', value:'targaryen'},{text:'Чтение древних книг', value:'maester'}
      ]},
      { type:'choice', question:'Что скажете про зиму?', answers:[
        {text:'Зима близко, готовлюсь', value:'stark'},{text:'У меня есть золото', value:'lannister'},{text:'Я — огонь', value:'targaryen'},{text:'Изучил(а) все хроники', value:'maester'}
      ]},
      { type:'choice', question:'Ваш девиз?', answers:[
        {text:'Зима близко', value:'stark'},{text:'Ланнистеры платят долги', value:'lannister'},{text:'Огонь и кровь', value:'targaryen'},{text:'Знание — сила', value:'maester'}
      ]},
      { type:'slider', question:'Насколько вы готовы рисковать?', min:0, max:100, labels:['Осторожно','Ва-банк'] }
    ],
    calcResult(scores){ const f={}; scores.forEach(s=>{if(typeof s==='string')f[s]=(f[s]||0)+1}); const s=Object.entries(f).sort((a,b)=>b[1]-a[1]); return s[0]?s[0][0]:'stark'; },
    results:[
      {key:'stark',title:'🐺 Старк',description:'Вы благородны и преданы семье.',emoji:'🐺',color:'#94a3b8'},
      {key:'lannister',title:'🦁 Ланнистер',description:'Амбициозны и расчётливы.',emoji:'🦁',color:'#f59e0b'},
      {key:'targaryen',title:'🐉 Таргариен',description:'Харизматичны и мечтательны.',emoji:'🐉',color:'#ef4444'},
      {key:'maester',title:'📚 Мейстер',description:'Знания — ваша суперсила.',emoji:'📚',color:'#06b6d4'},
      {key:'tyrion',title:'🍷 Тирион',description:'Острый ум и сарказм.',emoji:'🍷',color:'#a78bfa'},
      {key:'littlefinger',title:'🐍 Мизинец',description:'Мастер интриг.',emoji:'🐍',color:'#64748b'}
    ]
  },
  // ========== Психотип (без изм) ==========
  {
    id:'psychotype', title:'🔮 Твой психотип личности', category:'personality', emoji:'🔮', questionsCount:7, timeLimit:0, difficulty:'medium', badges:['new'],
    questions:[
      { type:'choice', question:'На вечеринке вы:', answers:[{text:'Общаетесь со всеми', value:'E'},{text:'В кругу близких', value:'I'}] },
      { type:'choice', question:'Решение принимаете на основе:', answers:[{text:'Фактов и логики', value:'T'},{text:'Чувств и интуиции', value:'F'}] },
      { type:'choice', question:'Предпочитаете:', answers:[{text:'Чёткий план', value:'J'},{text:'Спонтанность', value:'P'}] },
      { type:'choice', question:'В новой ситуации:', answers:[{text:'Изучаете детали', value:'S'},{text:'Видите картину целиком', value:'N'}] },
      { type:'slider', question:'Насколько вы интроверт?', min:0, max:100, labels:['Экстраверт','Интроверт'] },
      { type:'choice', question:'Конфликт для вас:', answers:[{text:'Прояснение позиций', value:'T'},{text:'Стресс', value:'F'}] },
      { type:'choice', question:'Выходные проведёте:', answers:[{text:'Активно с друзьями', value:'E'},{text:'Дома в уюте', value:'I'}] }
    ],
    calcResult(scores){ const e=scores.filter(v=>v==='E').length, i=scores.filter(v=>v==='I').length, n=scores.filter(v=>v==='N').length, s=scores.filter(v=>v==='S').length, t=scores.filter(v=>v==='T').length, f=scores.filter(v=>v==='F').length, j=scores.filter(v=>v==='J').length, p=scores.filter(v=>v==='P').length; const type=(e>i?'E':'I')+(n>s?'N':'S')+(t>f?'T':'F')+(j>p?'J':'P'); const map={INTJ:'INTJ',ENTJ:'ENTP',ENFP:'ENFP',ISTJ:'ISTJ',ENTP:'ENTP'}; return map[type]||'ENFP'; },
    results:[
      {key:'INTJ',title:'♟️ Стратег (INTJ)',description:'Архитектор реальности.',emoji:'♟️',color:'#7c3aed'},
      {key:'ENFP',title:'🦋 Вдохновитель (ENFP)',description:'Генератор идей.',emoji:'🦋',color:'#ec4899'},
      {key:'ISTJ',title:'🛡️ Хранитель (ISTJ)',description:'Надёжность и порядок.',emoji:'🛡️',color:'#64748b'},
      {key:'ENTP',title:'💡 Изобретатель (ENTP)',description:'Обожаете нестандартные решения.',emoji:'💡',color:'#06b6d4'}
    ]
  },
  // ========== Язык любви ==========
  {
    id:'love-language', title:'💕 Твой язык любви', category:'love', emoji:'💕', questionsCount:6, timeLimit:0, difficulty:'easy', badges:[],
    questions:[
      { type:'choice', question:'Что ценнее от партнёра?', answers:[{text:'Прикосновения',value:'touch'},{text:'Слова поддержки',value:'words'},{text:'Помощь в делах',value:'acts'},{text:'Подарки',value:'gifts'}] },
      { type:'choice', question:'Чувствуете себя любимым(ой) когда:', answers:[{text:'Обнимают',value:'touch'},{text:'Говорят комплименты',value:'words'},{text:'Готовят ужин',value:'acts'},{text:'Дарят без повода',value:'gifts'}] },
      { type:'choice', question:'Что ранит больше?', answers:[{text:'Холодность',value:'touch'},{text:'Критика',value:'words'},{text:'Невыполненные обещания',value:'acts'},{text:'Забытые даты',value:'gifts'}] },
      { type:'slider', question:'Насколько важны прикосновения?', min:0,max:100, labels:['Не важно','Жизненно'] },
      { type:'choice', question:'Идеальное свидание:', answers:[{text:'Вечер в обнимку',value:'touch'},{text:'Душевный разговор',value:'words'},{text:'Совместное приключение',value:'time'},{text:'Сюрприз-подарок',value:'gifts'}] },
      { type:'choice', question:'Что дарите партнёру?', answers:[{text:'Массаж и заботу',value:'touch'},{text:'Письма и сообщения',value:'words'},{text:'Решение проблем',value:'acts'},{text:'Приятные мелочи',value:'gifts'}] }
    ],
    calcResult(scores){ const f={}; scores.forEach(s=>{if(typeof s==='string')f[s]=(f[s]||0)+1}); const s=Object.entries(f).sort((a,b)=>b[1]-a[1]); return s[0]?s[0][0]:'touch'; },
    results:[
      {key:'touch',title:'🤗 Прикосновения',description:'Объятия важнее слов.',emoji:'🤗',color:'#ec4899'},
      {key:'words',title:'💬 Слова',description:'Комплименты — ваша магия.',emoji:'💬',color:'#06b6d4'},
      {key:'acts',title:'🛠️ Дела',description:'Действия громче слов.',emoji:'🛠️',color:'#10b981'},
      {key:'gifts',title:'🎁 Подарки',description:'Внимание к деталям.',emoji:'🎁',color:'#f59e0b'}
    ]
  },
  // ========== Фрукт ==========
  {
    id:'what-fruit', title:'🍉 Какой ты фрукт?', category:'funny', emoji:'🍉', questionsCount:5, timeLimit:0, difficulty:'easy', badges:[],
    questions:[
      { type:'choice', question:'Твой характер:', answers:[{text:'Сладкий и мягкий',value:'banana'},{text:'Кислый, но интересный',value:'lemon'},{text:'Твёрдый снаружи',value:'coconut'},{text:'Сочный и яркий',value:'watermelon'}] },
      { type:'choice', question:'Твоя суперсила:', answers:[{text:'Поднимать настроение',value:'banana'},{text:'Освежать идеи',value:'lemon'},{text:'Защищать близких',value:'coconut'},{text:'Быть душой компании',value:'watermelon'}] },
      { type:'choice', question:'Что говорят друзья?', answers:[{text:'Всегда позитивный',value:'banana'},{text:'Острый на язык',value:'lemon'},{text:'Загадочный',value:'coconut'},{text:'Взрывной и весёлый',value:'watermelon'}] },
      { type:'slider', question:'Насколько ты сочный?', min:0,max:100, labels:['Суховат','МЕГАСОЧНЫЙ'] },
      { type:'choice', question:'Идеальный день:', answers:[{text:'Пикник на пляже',value:'watermelon'},{text:'Спа-день',value:'banana'},{text:'Острый спор',value:'lemon'},{text:'Поход в горы',value:'coconut'}] }
    ],
    calcResult(scores){ const f={}; scores.forEach(s=>{if(typeof s==='string')f[s]=(f[s]||0)+1}); return Object.entries(f).sort((a,b)=>b[1]-a[1])[0][0]; },
    results:[
      {key:'watermelon',title:'🍉 Арбуз',description:'Душа компании!',emoji:'🍉',color:'#ef4444'},
      {key:'banana',title:'🍌 Банан',description:'Источник позитива.',emoji:'🍌',color:'#f59e0b'},
      {key:'lemon',title:'🍋 Лимон',description:'Острый и бодрящий.',emoji:'🍋',color:'#10b981'},
      {key:'coconut',title:'🥥 Кокос',description:'Загадочная натура.',emoji:'🥥',color:'#94a3b8'}
    ]
  },
  // ========== Карьера ==========
  {
    id:'career-path', title:'💼 Какая профессия подходит?', category:'career', emoji:'💼', questionsCount:6, timeLimit:0, difficulty:'medium', badges:['new'],
    questions:[
      { type:'choice', question:'Что интереснее?', answers:[{text:'Работа с людьми',value:'social'},{text:'Работа с цифрами',value:'analytical'},{text:'Творчество',value:'creative'},{text:'Технологии',value:'tech'}] },
      { type:'choice', question:'В команде вы:', answers:[{text:'Вдохновляете',value:'social'},{text:'Анализируете',value:'analytical'},{text:'Генерируете идеи',value:'creative'},{text:'Решаете технические проблемы',value:'tech'}] },
      { type:'slider', question:'Насколько вы креативны?', min:0,max:100, labels:['Логик','Художник'] },
      { type:'choice', question:'Идеальная среда:', answers:[{text:'Офис с общением',value:'social'},{text:'Тихий кабинет',value:'analytical'},{text:'Студия/лофт',value:'creative'},{text:'Лаборатория',value:'tech'}] },
      { type:'choice', question:'Главное в работе:', answers:[{text:'Помощь другим',value:'social'},{text:'Стабильность',value:'analytical'},{text:'Самовыражение',value:'creative'},{text:'Инновации',value:'tech'}] },
      { type:'choice', question:'Какую задачу выберете?', answers:[{text:'Организовать мероприятие',value:'social'},{text:'Составить бюджет',value:'analytical'},{text:'Создать логотип',value:'creative'},{text:'Собрать робота',value:'tech'}] }
    ],
    calcResult(scores){ const f={}; scores.forEach(s=>{if(typeof s==='string')f[s]=(f[s]||0)+1}); return Object.entries(f).sort((a,b)=>b[1]-a[1])[0][0]; },
    results:[
      {key:'social',title:'🤝 Коммуникатор',description:'Менеджер, HR, психолог.',emoji:'🤝',color:'#06b6d4'},
      {key:'analytical',title:'📊 Аналитик',description:'Финансист, data scientist.',emoji:'📊',color:'#7c3aed'},
      {key:'creative',title:'🎨 Творец',description:'Дизайнер, маркетолог.',emoji:'🎨',color:'#ec4899'},
      {key:'tech',title:'🔧 Технарь',description:'Программист, инженер.',emoji:'🔧',color:'#10b981'}
    ]
  },
  // ========== НОВЫЕ ТЕСТЫ ==========
  {
    id:'spirit-animal', title:'🦉 Твоё тотемное животное', category:'personality', emoji:'🦉', questionsCount:6, timeLimit:0, difficulty:'easy', badges:['new'],
    questions:[
      { type:'choice', question:'Как вы проводите свободное время?', answers:[{text:'В окружении друзей',value:'dolphin'},{text:'На природе',value:'wolf'},{text:'За чтением',value:'owl'},{text:'В спортзале',value:'bear'}] },
      { type:'choice', question:'Ваш главный недостаток?', answers:[{text:'Слишком доверчивый',value:'dolphin'},{text:'Импульсивность',value:'wolf'},{text:'Перфекционизм',value:'owl'},{text:'Лень',value:'bear'}] },
      { type:'choice', question:'Что вас вдохновляет?', answers:[{text:'Гармония',value:'dolphin'},{text:'Свобода',value:'wolf'},{text:'Мудрость',value:'owl'},{text:'Сила',value:'bear'}] },
      { type:'choice', question:'Какая стихия вам ближе?', answers:[{text:'Вода',value:'dolphin'},{text:'Лес',value:'wolf'},{text:'Воздух',value:'owl'},{text:'Горы',value:'bear'}] },
      { type:'slider', question:'Насколько вы общительны?', min:0,max:100, labels:['Одиночка','Душа компании'] },
      { type:'choice', question:'Какая суперсила вам нужна?', answers:[{text:'Эмпатия',value:'dolphin'},{text:'Скорость',value:'wolf'},{text:'Телепатия',value:'owl'},{text:'Неуязвимость',value:'bear'}] }
    ],
    calcResult(scores){ const f={}; scores.forEach(s=>{if(typeof s==='string')f[s]=(f[s]||0)+1}); return Object.entries(f).sort((a,b)=>b[1]-a[1])[0][0]; },
    results:[
      {key:'dolphin',title:'🐬 Дельфин',description:'Вы умны, дружелюбны и любите гармонию.',emoji:'🐬',color:'#06b6d4'},
      {key:'wolf',title:'🐺 Волк',description:'Свободолюбивы, преданы стае и обладаете интуицией.',emoji:'🐺',color:'#94a3b8'},
      {key:'owl',title:'🦉 Сова',description:'Мудрый стратег, цените знания и тишину.',emoji:'🦉',color:'#a78bfa'},
      {key:'bear',title:'🐻 Медведь',description:'Сильный, надёжный, но любите комфорт.',emoji:'🐻',color:'#f59e0b'}
    ]
  },
  {
    id:'color-personality', title:'🎨 Какой ты цвет?', category:'funny', emoji:'🎨', questionsCount:6, timeLimit:0, difficulty:'easy', badges:[],
    questions:[
      { type:'choice', question:'Утро начинается с...', answers:[{text:'Энергичной зарядки',value:'red'},{text:'Медитации',value:'blue'},{text:'Творческого порыва',value:'green'},{text:'Размышлений',value:'purple'}] },
      { type:'choice', question:'Ваш идеальный отдых:', answers:[{text:'Экстремальный спорт',value:'red'},{text:'Пляж с книгой',value:'blue'},{text:'Прогулка в лесу',value:'green'},{text:'Арт-галерея',value:'purple'}] },
      { type:'slider', question:'Насколько вы активны?', min:0,max:100, labels:['Спокойный','Гиперактивный'] },
      { type:'choice', question:'Что в людях раздражает?', answers:[{text:'Медлительность',value:'red'},{text:'Агрессия',value:'blue'},{text:'Равнодушие',value:'green'},{text:'Поверхностность',value:'purple'}] },
      { type:'choice', question:'Какую музыку предпочитаете?', answers:[{text:'Рок/энергичную',value:'red'},{text:'Джаз/классику',value:'blue'},{text:'Фолк/этно',value:'green'},{text:'Электронику',value:'purple'}] },
      { type:'choice', question:'Ваш девиз:', answers:[{text:'Действуй!',value:'red'},{text:'Сохраняй спокойствие',value:'blue'},{text:'Живи в гармонии',value:'green'},{text:'Думай нестандартно',value:'purple'}] }
    ],
    calcResult(scores){ const f={}; scores.forEach(s=>{if(typeof s==='string')f[s]=(f[s]||0)+1}); return Object.entries(f).sort((a,b)=>b[1]-a[1])[0][0]; },
    results:[
      {key:'red',title:'❤️ Красный',description:'Энергичный, страстный, любите быть в центре внимания.',emoji:'❤️',color:'#ef4444'},
      {key:'blue',title:'💙 Синий',description:'Спокойный, надёжный, цените гармонию.',emoji:'💙',color:'#3b82f6'},
      {key:'green',title:'💚 Зелёный',description:'Прирождённый миротворец, любите рост и развитие.',emoji:'💚',color:'#10b981'},
      {key:'purple',title:'💜 Фиолетовый',description:'Креативная душа, видите мир иначе.',emoji:'💜',color:'#a855f7'}
    ]
  },
  {
    id:'stress-test', title:'😌 Тест на стрессоустойчивость', category:'personality', emoji:'😌', questionsCount:5, timeLimit:0, difficulty:'medium', badges:[], showScore:true,
    questions:[
      { type:'choice', question:'Неожиданный дедлайн на работе:', answers:[{text:'Паника, стресс',value:0},{text:'Быстро составляю план',value:2},{text:'Спокойно, но усердно работаю',value:1}] },
      { type:'choice', question:'В пробке важная встреча:', answers:[{text:'Нервничаю, сигналю',value:0},{text:'Слушаю музыку, жду',value:2},{text:'Нервничаю, но звоню предупредить',value:1}] },
      { type:'slider', question:'Как часто вы испытываете тревогу?', min:0,max:100, labels:['Редко','Постоянно'] },
      { type:'choice', question:'Критика в ваш адрес:', answers:[{text:'Сильно расстраиваюсь',value:0},{text:'Анализирую и делаю выводы',value:2},{text:'Зависит от настроения',value:1}] },
      { type:'choice', question:'Перед сном мысли:', answers:[{text:'Кручу проблемы',value:0},{text:'Планирую завтра',value:2},{text:'Читаю, отвлекаюсь',value:1}] }
    ],
    results:[
      { range:[0,4], title:'🌪️ Высокая тревожность', description:'Стресс сильно влияет на вас. Попробуйте техники релаксации.', emoji:'🌪️', color:'#ef4444' },
      { range:[4,7], title:'⚖️ Умеренный уровень', description:'Вы справляетесь, но иногда стресс берёт верх.', emoji:'⚖️', color:'#f59e0b' },
      { range:[7,11], title:'🧘 Железобетонный', description:'Вас сложно выбить из колеи. Отличная стрессоустойчивость!', emoji:'🧘', color:'#10b981' }
    ]
  },
  {
    id:'harrypotter-house', title:'⚡ Твой факультет Хогвартса', category:'character', emoji:'⚡', questionsCount:6, timeLimit:0, difficulty:'easy', badges:['hot'],
    questions:[
      { type:'choice', question:'Что вы цените больше всего?', answers:[{text:'Отвага',value:'gryffindor'},{text:'Амбиции',value:'slytherin'},{text:'Знания',value:'ravenclaw'},{text:'Дружба',value:'hufflepuff'}] },
      { type:'choice', question:'Какое заклинание выберете?', answers:[{text:'Экспеллиармус',value:'gryffindor'},{text:'Круциатус',value:'slytherin'},{text:'Алохомора',value:'ravenclaw'},{text:'Экспекто патронум',value:'hufflepuff'}] },
      { type:'choice', question:'Идеальное животное:', answers:[{text:'Лев',value:'gryffindor'},{text:'Змея',value:'slytherin'},{text:'Орёл',value:'ravenclaw'},{text:'Барсук',value:'hufflepuff'}] },
      { type:'slider', question:'Насколько вы хитры?', min:0,max:100, labels:['Простодушный','Хитрый лис'] },
      { type:'choice', question:'Что сделаете с запретной секцией?', answers:[{text:'Пойду исследовать',value:'gryffindor'},{text:'Выведаю тайны',value:'slytherin'},{text:'Прочитаю все книги',value:'ravenclaw'},{text:'Предупрежу друзей',value:'hufflepuff'}] },
      { type:'choice', question:'Ваш девиз:', answers:[{text:'Смелость и честь',value:'gryffindor'},{text:'Цель оправдывает средства',value:'slytherin'},{text:'Знание — сила',value:'ravenclaw'},{text:'Верность навсегда',value:'hufflepuff'}] }
    ],
    calcResult(scores){ const f={}; scores.forEach(s=>{if(typeof s==='string')f[s]=(f[s]||0)+1}); return Object.entries(f).sort((a,b)=>b[1]-a[1])[0][0]; },
    results:[
      {key:'gryffindor',title:'🦁 Гриффиндор',description:'Храбрый, решительный, немного авантюрист.',emoji:'🦁',color:'#ef4444'},
      {key:'slytherin',title:'🐍 Слизерин',description:'Амбициозный, целеустремлённый, хитрый.',emoji:'🐍',color:'#10b981'},
      {key:'ravenclaw',title:'🦅 Когтевран',description:'Умный, творческий, любите загадки.',emoji:'🦅',color:'#3b82f6'},
      {key:'hufflepuff',title:'🦡 Пуффендуй',description:'Верный, трудолюбивый, справедливый.',emoji:'🦡',color:'#f59e0b'}
    ]
  },
  {
    id:'introvert-extrovert', title:'🤫 Интроверт или экстраверт?', category:'personality', emoji:'🤫', questionsCount:7, timeLimit:0, difficulty:'easy', badges:[],
    questions:[
      { type:'choice', question:'После долгого общения вы:', answers:[{text:'Заряжаюсь энергией',value:'E'},{text:'Чувствую опустошение',value:'I'}] },
      { type:'choice', question:'Новые знакомства:', answers:[{text:'Легко и приятно',value:'E'},{text:'Напрягают',value:'I'}] },
      { type:'slider', question:'Насколько вам комфортно в толпе?', min:0,max:100, labels:['Ужас','Обожаю'] },
      { type:'choice', question:'Работаете лучше:', answers:[{text:'В команде',value:'E'},{text:'В одиночестве',value:'I'}] },
      { type:'choice', question:'На вечеринке вы:', answers:[{text:'Душа компании',value:'E'},{text:'Наблюдатель',value:'I'}] },
      { type:'choice', question:'Телефонный звонок:', answers:[{text:'Сразу отвечаю',value:'E'},{text:'Сначала думаю, потом перезваниваю',value:'I'}] },
      { type:'choice', question:'Идеальный вечер:', answers:[{text:'Шумная компания',value:'E'},{text:'Книга и чай',value:'I'}] }
    ],
    calcResult(scores){ const e=scores.filter(v=>v==='E').length, i=scores.filter(v=>v==='I').length; return e>i?'E':'I'; },
    results:[
      {key:'E',title:'🎉 Экстраверт',description:'Вы черпаете энергию от общения. Вы открыты и общительны.',emoji:'🎉',color:'#f59e0b'},
      {key:'I',title:'🌙 Интроверт',description:'Восстанавливаете силы в уединении. Глубокий внутренний мир.',emoji:'🌙',color:'#7c3aed'}
    ]
  },
  {
    id:'element', title:'🌍 Какая ты стихия?', category:'personality', emoji:'🌍', questionsCount:6, timeLimit:0, difficulty:'easy', badges:['new'],
    questions:[
      { type:'choice', question:'Что вас привлекает?', answers:[{text:'Костер',value:'fire'},{text:'Океан',value:'water'},{text:'Горы',value:'earth'},{text:'Небо',value:'air'}] },
      { type:'choice', question:'Ваш характер:', answers:[{text:'Вспыльчивый, но отходчивый',value:'fire'},{text:'Спокойный, глубокий',value:'water'},{text:'Надёжный, упорный',value:'earth'},{text:'Лёгкий, переменчивый',value:'air'}] },
      { type:'slider', question:'Насколько вы эмоциональны?', min:0,max:100, labels:['Спокойный','Вулкан'] },
      { type:'choice', question:'Любимое время года:', answers:[{text:'Лето',value:'fire'},{text:'Зима',value:'water'},{text:'Осень',value:'earth'},{text:'Весна',value:'air'}] },
      { type:'choice', question:'Как вы принимаете решения?', answers:[{text:'Быстро, интуитивно',value:'fire'},{text:'Долго обдумываю',value:'water'},{text:'Планомерно',value:'earth'},{text:'Импульсивно',value:'air'}] },
      { type:'choice', question:'Ваш девиз:', answers:[{text:'Гореть, а не тлеть',value:'fire'},{text:'Вода камень точит',value:'water'},{text:'Терпение и труд',value:'earth'},{text:'Вольный ветер',value:'air'}] }
    ],
    calcResult(scores){ const f={}; scores.forEach(s=>{if(typeof s==='string')f[s]=(f[s]||0)+1}); return Object.entries(f).sort((a,b)=>b[1]-a[1])[0][0]; },
    results:[
      {key:'fire',title:'🔥 Огонь',description:'Энергичный, страстный, лидер.',emoji:'🔥',color:'#ef4444'},
      {key:'water',title:'💧 Вода',description:'Глубокий, интуитивный, спокойный.',emoji:'💧',color:'#3b82f6'},
      {key:'earth',title:'🌿 Земля',description:'Практичный, стабильный, надёжный.',emoji:'🌿',color:'#10b981'},
      {key:'air',title:'💨 Воздух',description:'Интеллектуальный, свободолюбивый, общительный.',emoji:'💨',color:'#94a3b8'}
    ]
  }
];

const ACHIEVEMENTS = [
  { id:'first_test', title:'Первый тест', sub:'Пройдите свой первый тест', emoji:'🎉', xp:30, condition:s=>s.testsCompleted>=1 },
  { id:'five_tests', title:'Тестоман', sub:'5 тестов', emoji:'📚', xp:100, condition:s=>s.testsCompleted>=5 },
  { id:'streak_3', title:'На крючке', sub:'Стрик 3 дня', emoji:'🔥', xp:75, condition:s=>s.streak>=3 },
  { id:'streak_7', title:'Железная воля', sub:'Стрик 7 дней', emoji:'💎', xp:200, condition:s=>s.streak>=7 },
  { id:'level_5', title:'Растущий', sub:'Достигните 5 уровня', emoji:'⬆️', xp:150, condition:s=>s.level>=5 },
  { id:'total_xp_500', title:'Опытный', sub:'500 XP', emoji:'⭐', xp:50, condition:s=>s.totalXP>=500 },
];