import type { Content } from './types';

export const ru: Content = {
  meta: {
    title: 'Красновский Матвей Андреевич — разработчик веб- и десктопных приложений',
    description:
      'Портфолио Матвея Красновского: веб- и десктопные приложения, backend, сопровождение ПО.',
  },
  nav: {
    projects: 'Проекты',
    skills: 'Навыки',
    education: 'Обучение',
    contact: 'Контакты',
    resume: 'Резюме',
  },
  hero: {
    eyebrow: 'Портфолио · 2026',
    surname: 'Красновский',
    name: 'Матвей Андреевич',
    orbMark: 'КМА',
    role: 'Разработчик веб- и десктопных приложений',
    tagline:
      'Студент 4 курса. Java, TypeScript, Node.js. Делаю приложения и разбираюсь в сопровождении ПО.',
    status: 'Открыт к практике и стажировке',
    ctaProjects: 'Смотреть проекты',
    ctaResume: 'Скачать резюме',
    orbTags: ['Java', 'TypeScript', 'React', 'Node.js', 'SQL', 'Git'],
  },
  about: {
    label: 'Обо мне',
    title: 'Делаю приложения, которые понятно поддерживать.',
    paragraphs: [
      'Я — студент 4 курса ЧУО «Колледж бизнеса и права», учусь по специальности «Разработка и сопровождение ПО информационных систем». Параллельно с учёбой веду собственные проекты и осваиваю новые технологии.',
      'Предпочитаю frontend- и backend-разработку. Часто занимаюсь проектированием функционала и интерфейсов.',
      'Для меня важны чистота и надёжность кода; много внимания уделяю проектированию на старте: считаю, что крепкий фундамент является самым уязвимым местом, если сделать его некорректно.',
      'Вне учёбы продолжаю изучать технологии и подходы к разработке, также увлекаюсь разработкой и настройкой Minecraft-серверов на Java.',
    ],
    facts: [
      { label: 'Обучение', value: '4 курс · выпуск 2027' },
      { label: 'Специальность', value: '5-04-0612-02' },
      { label: 'Квалификация', value: 'Оператор ЭВМ (ПЭВМ)' },
      { label: 'Стек', value: 'Java · TypeScript · Node.js · SQL' },
      { label: 'Статус', value: 'Открыт к практике' },
    ],
  },
  projects: {
    label: 'Избранное',
    title: 'Проекты',
    lead:
      'Учебные и индивидуальные работы: веб, десктоп, командная разработка. У приватных проектов код покажу по запросу.',
    viewCase: 'Смотреть кейс',
    close: 'Закрыть',
    meta: {
      role: 'Роль',
      stack: 'Стек',
      year: 'Год',
      status: 'Статус',
      links: 'Ссылки',
    },
    sections: {
      task: 'Задача',
      solution: 'Решение',
      whatIDid: 'Что делал',
      result: 'Результат',
    },
    items: {
      zazerby: {
        category: 'Веб-приложение · Full-stack',
        summary: 'Приём заявок на изготовление мебели: сайт, каталог, портфолио и CMS.',
        task: 'Производителю мебели нужен сайт с каталогом, портфолио и приёмом заявок.',
        solution:
          'Монорепозиторий: клиентский сайт, админка на Payload CMS и отдельный API заявок на NestJS + Prisma.',
        role: 'Полный цикл',
        bullets: [
          'Спроектировал архитектуру монорепозитория: web, admin, requests, infra.',
          'Проработал пользовательские сценарии и прототипы страниц.',
          'Реализовал сайт, каталог, портфолио и панель управления на Payload CMS.',
          'Разработал API заявок на NestJS + Prisma, настроил PostgreSQL и Docker.',
        ],
        result: 'Проект в разработке; готовы сайт, админка и API заявок.',
        status: 'В разработке',
        privateNote: 'Код приватный — покажу по запросу.',
      },
      journal: {
        category: 'Веб-приложение · Командный проект',
        summary: 'Учёт успеваемости студентов колледжа.',
        task: 'Нужен прототип системы учёта успеваемости для учебного проекта.',
        solution: 'Full-stack приложение на React + NestJS + Prisma с MS SQL Server.',
        role: 'Основной разработчик',
        bullets: [
          'Спроектировал интерфейс и реализовал frontend на React + TypeScript + MUI.',
          'Разработал backend на NestJS + Prisma, подключил MS SQL Server.',
          'Настроил взаимодействие frontend и backend для основного функционала.',
          'Реализовал базовый учёт успеваемости студентов.',
        ],
        result: 'Учебный прототип с базовым функционалом.',
        status: 'Учебный прототип',
        privateNote: 'Код приватный — покажу по запросу.',
      },
      epson: {
        category: 'Десктоп · Индивидуальный проект',
        summary:
          'Управление принтером Epson XP-103: печать, сканирование, чернила, статистика.',
        task: 'Сделать удобную панель управления конкретным принтером вместо стандартных утилит.',
        solution:
          'Electron + React + TypeScript, Python-помощник для USB-телеметрии, SQLite и NAPS2 для сканирования.',
        role: 'Полный цикл',
        bullets: [
          'Спроектировал интерфейс и реализовал 8 разделов приложения.',
          'Реализовал Electron main/preload/IPC, очередь печати, сканирование и копирование.',
          'Интегрировал Python-помощник для USB-телеметрии, SQLite и NAPS2.',
          'Настроил сборку установщика и портативной версии.',
        ],
        result: 'Рабочее приложение; есть установщик и портативная сборка.',
        status: 'Рабочее приложение',
        privateNote: 'Код приватный — покажу по запросу.',
      },
      lshop: {
        category: 'Веб · Командный проект',
        summary: 'SPA-интернет-магазин игровых товаров.',
        task: 'Командная лабораторная работа: собрать SPA-магазин с корзиной и оформлением.',
        solution:
          'TypeScript, Node.js + Express, HTML/CSS/SPA; разделение ролей в команде из 4 человек.',
        role: 'Авторизация, роли, документация, тесты',
        bullets: [
          'Реализовал авторизацию, регистрацию, личный кабинет и систему ролей.',
          'Занимался прототипированием страниц и документацией.',
          'Вёл контроль версий и тестировал сценарии авторизации и ролей.',
        ],
        result: 'Учебный проект; код открыт на GitHub.',
        status: 'Учебный проект',
        links: [
          {
            label: 'GitHub',
            href: 'https://github.com/pltdeveloper393/L_Shop',
          },
        ],
      },
      'product-adjust': {
        category: 'Лендинг · Вёрстка',
        summary: 'Лендинг для продвижения товаров с адаптивной вёрсткой и SEO-блоками.',
        task: 'Собрать статический лендинг с аккуратной адаптивной вёрсткой.',
        solution: 'HTML5, CSS3, JavaScript; mobile-first, normalize.css, GitHub Pages.',
        role: 'Вёрстка и публикация',
        bullets: [
          'Свёрстал адаптивные страницы для мобильных, планшетов и десктопа.',
          'Добавил интерактив и SEO-блоки.',
          'Опубликовал проект на GitHub Pages.',
        ],
        result: 'Опубликован и доступен по ссылке.',
        status: 'Опубликован',
        links: [
          {
            label: 'Демо',
            href: 'https://pltdeveloper393.github.io/Product-Adjust/',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/pltdeveloper393/Product-Adjust',
          },
        ],
      },
      portfolio: {
        category: 'Сайт · React + TypeScript',
        summary:
          'Этот сайт: дизайн-система, RU/EN, доступность и аккуратные анимации.',
        task: 'Собрать личное портфолио, которое показывает проекты и подход к работе.',
        solution:
          'React + TypeScript + Vite, кастомная дизайн-система на CSS, Motion для анимаций, GitHub Pages.',
        role: 'Дизайн и разработка',
        bullets: [
          'Спроектировал визуальный язык на основе резюме.',
          'Собрал адаптивный интерфейс и переключение RU/EN.',
          'Добавил анимации, доступность и мобильную версию.',
          'Настроил сборку и деплой на GitHub Pages.',
        ],
        result: 'Опубликован на GitHub Pages; проект продолжает развиваться.',
        status: 'Опубликован',
        links: [
          {
            label: 'GitHub',
            href: 'https://github.com/pltdeveloper393/PortfolioKMA',
          },
        ],
      },
    },
  },
  skills: {
    label: 'Стек',
    title: 'Навыки',
    levels: {
      core: 'основной',
      experience: 'опыт',
      basic: 'базовый',
    },
    levelHints: {
      core: 'использую постоянно',
      experience: 'применял в проектах',
      basic: 'знаю основы',
    },
    meta: {
      skills: 'навык|навыка|навыков',
      categories: 'категория|категории|категорий',
    },
    counts: {
      core: 'основных',
      experience: 'опыта',
      basic: 'базовых',
    },
    labels: {
      categories: 'Категории',
      levels: 'Уровни',
      previousPage: 'Предыдущая страница',
      nextPage: 'Следующая страница',
    },
    panel: {
      records: 'запись|записи|записей',
    },
    groups: [
      {
        title: 'Языки',
        items: [
          { name: 'Язык 1', level: 'core' },
          { name: 'Язык 2', level: 'core' },
          { name: 'Язык 3', level: 'core' },
          { name: 'Язык 4', level: 'core' },
          { name: 'Язык 5', level: 'basic' },
          { name: 'Язык 6', level: 'basic' },
        ],
      },
      {
        title: 'Frontend',
        items: [
          { name: 'Frontend 1', level: 'core' },
          { name: 'Frontend 2', level: 'experience' },
          { name: 'Frontend 3', level: 'core' },
          { name: 'Frontend 4', level: 'experience' },
          { name: 'Frontend 5', level: 'experience' },
        ],
      },
      {
        title: 'Backend',
        items: [
          { name: 'Backend 1', level: 'core' },
          { name: 'Backend 2', level: 'experience' },
          { name: 'Backend 3', level: 'experience' },
          { name: 'Backend 4', level: 'experience' },
          { name: 'Backend 5', level: 'experience' },
        ],
      },
      {
        title: 'Данные',
        items: [
          { name: 'Данные 1', level: 'experience' },
          { name: 'Данные 2', level: 'experience' },
        ],
      },
      {
        title: 'Инструменты',
        items: [
          { name: 'Инструмент 1', level: 'core' },
          { name: 'Инструмент 2', level: 'basic' },
          { name: 'Инструмент 3', level: 'experience' },
          { name: 'Инструмент 4', level: 'basic' },
          { name: 'Инструмент 5', level: 'basic' },
          { name: 'Инструмент 6', level: 'basic' },
        ],
      },
      {
        title: 'Сопровождение',
        items: [
          { name: 'Сопровождение 1', level: 'core' },
          { name: 'Сопровождение 2', level: 'experience' },
          { name: 'Сопровождение 3', level: 'experience' },
          { name: 'Сопровождение 4', level: 'basic' },
          { name: 'Сопровождение 5', level: 'experience' },
        ],
      },
      {
        title: 'Проектирование',
        items: [
          { name: 'Проектирование 1', level: 'experience' },
          { name: 'Проектирование 2', level: 'basic' },
          { name: 'Проектирование 3', level: 'experience' },
        ],
      },
    ],
  },
  education: {
    label: 'Обучение',
    title: 'Образование',
    lead: 'Колледж, специальность и ключевые дисциплины.',
    org: 'ЧУО «Колледж бизнеса и права»',
    period: '2023–2027',
    specialty:
      '5-04-0612-02 «Разработка и сопровождение программного обеспечения информационных систем»',
    qualification: 'Оператор ЭВМ (ПЭВМ), 5-й разряд — присваивается по окончании.',
    status: '4 курс · выпуск 2027 · средний балл 8,0/10',
    disciplinesTitle: 'Ключевые дисциплины',
    disciplines: [
      'Веб-программирование',
      'Базы данных и SQL',
      'Компьютерные сети',
      'ООП',
      'Мобильная разработка',
      '1С',
      'Управление проектами',
    ],
  },
  contact: {
    label: 'Контакты',
    title: 'Открыт к практике и стажировке.',
    lead:
      'Если нужен разработчик, который разбирается в вебе, backend и сопровождении ПО — напишите.',
    email: 'Email',
    github: 'GitHub',
    resume: 'Резюме',
    status: 'Открыт к практике и стажировке',
  },
  download: {
    title: 'Резюме скачивается',
    subtitle: 'Файл сохранится в загрузки',
  },
  footer: {
    madeWith: 'Сделано на React + TypeScript',
    source: 'Исходники',
    rights: '© 2026 Красновский Матвей Андреевич',
  },
};
