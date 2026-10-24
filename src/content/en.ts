import type { Content } from './types';

export const en: Content = {
  meta: {
    title: 'Matvey Andreevich Krasnovsky — web & desktop developer',
    description:
      'Portfolio of Matvey Krasnovsky: web and desktop applications, backend, software maintenance.',
  },
  nav: {
    projects: 'Projects',
    skills: 'Skills',
    education: 'Education',
    contact: 'Contact',
    resume: 'Resume',
  },
  hero: {
    eyebrow: 'Portfolio · 2026',
    surname: 'Krasnovsky',
    name: 'Matvey Andreevich',
    orbMark: 'KMA',
    role: 'Web & desktop developer',
    tagline:
      '4th-year student. Java, TypeScript, Node.js. I build applications and care about software maintenance.',
    status: 'Open to internships',
    ctaProjects: 'View projects',
    ctaResume: 'Download resume',
    orbTags: ['Java', 'TypeScript', 'React', 'Node.js', 'SQL', 'Git'],
  },
  about: {
    label: 'About',
    title: 'I build applications that are easy to maintain.',
    paragraphs: [
      "I'm a 4th-year student at the College of Business and Law, majoring in Software Development and Maintenance for Information Systems. Alongside my studies, I work on my own projects and pick up new technologies.",
      'I prefer frontend and backend development. I often work on feature and interface design.',
      "I value clean, reliable code; I pay a lot of attention to the design phase, because a weak foundation is the most fragile part if you get it wrong.",
      "Outside of my studies, I keep learning new technologies and approaches, and I enjoy building and configuring Minecraft servers in Java.",
    ],
    facts: [
      { label: 'Education', value: '4th year · graduating 2027' },
      { label: 'Major', value: '5-04-0612-02' },
      { label: 'Qualification', value: 'Computer Operator (PC)' },
      { label: 'Stack', value: 'Java · TypeScript · Node.js · SQL' },
      { label: 'Status', value: 'Open to internships' },
    ],
  },
  projects: {
    label: 'Selected work',
    title: 'Projects',
    lead:
      'Academic and personal work: web, desktop, team development. Private repositories are available on request.',
    viewCase: 'View case study',
    close: 'Close',
    meta: {
      role: 'Role',
      stack: 'Stack',
      year: 'Year',
      status: 'Status',
      links: 'Links',
    },
    sections: {
      task: 'Task',
      solution: 'Solution',
      whatIDid: 'What I did',
      result: 'Result',
    },
    items: {
      zazerby: {
        category: 'Web app · Full-stack',
        summary: 'Furniture request platform: website, catalogue, portfolio and CMS.',
        task: 'A furniture maker needed a website with a catalogue, portfolio and request intake.',
        solution:
          'A monorepo: a public website, a Payload CMS admin and a separate request API on NestJS + Prisma.',
        role: 'Full cycle',
        bullets: [
          'Designed the monorepo architecture: web, admin, requests, infra.',
          'Worked through user scenarios and page prototypes.',
          'Built the website, catalogue, portfolio and Payload CMS admin.',
          'Developed the request API on NestJS + Prisma and set up PostgreSQL and Docker.',
        ],
        result: 'In development; the website, admin and request API are in place.',
        status: 'In development',
        privateNote: 'Private repository — available on request.',
      },
      journal: {
        category: 'Web app · Team project',
        summary: 'Student performance tracking for a college.',
        task: 'A prototype student performance system for an academic project.',
        solution: 'A full-stack app with React, NestJS, Prisma and MS SQL Server.',
        role: 'Lead developer',
        bullets: [
          'Designed the UI and built the frontend with React + TypeScript + MUI.',
          'Developed the backend on NestJS + Prisma and connected MS SQL Server.',
          'Wired the frontend and backend together for core functionality.',
          'Implemented the core student performance workflow.',
        ],
        result: 'Academic prototype with core functionality.',
        status: 'Academic prototype',
        privateNote: 'Private repository — available on request.',
      },
      epson: {
        category: 'Desktop · Personal project',
        summary: 'Epson XP-103 control panel: printing, scanning, ink, statistics.',
        task: 'A convenient control panel for a specific printer instead of stock utilities.',
        solution:
          'Electron + React + TypeScript, a Python helper for USB telemetry, SQLite and NAPS2 for scanning.',
        role: 'Full cycle',
        bullets: [
          'Designed the UI and built all eight sections of the app.',
          'Implemented Electron main/preload/IPC, the print queue, scanning and copying.',
          'Integrated the Python helper for USB telemetry, SQLite and NAPS2.',
          'Set up the installer and portable build.',
        ],
        result: 'Working app with an installer and portable build.',
        status: 'Working app',
        privateNote: 'Private repository — available on request.',
      },
      lshop: {
        category: 'Web · Team project',
        summary: 'SPA store for gaming goods.',
        task: 'A team lab: build an SPA store with a cart and checkout.',
        solution:
          'TypeScript, Node.js + Express, HTML/CSS/SPA; four-person team with shared responsibilities.',
        role: 'Auth, roles, documentation, tests',
        bullets: [
          'Implemented authentication, registration, the account area and the role system.',
          'Worked on page prototypes and documentation.',
          'Managed version control and tested authentication and role scenarios.',
        ],
        result: 'Academic project; the code is public on GitHub.',
        status: 'Academic project',
        links: [
          {
            label: 'GitHub',
            href: 'https://github.com/pltdeveloper393/L_Shop',
          },
        ],
      },
      'product-adjust': {
        category: 'Landing · Front-end',
        summary: 'Product landing page with responsive layout and SEO blocks.',
        task: 'Build a static landing page with a clean responsive layout.',
        solution: 'HTML5, CSS3, JavaScript; mobile-first, normalize.css, GitHub Pages.',
        role: 'Front-end and publishing',
        bullets: [
          'Built responsive pages for mobile, tablet and desktop.',
          'Added interactions and SEO blocks.',
          'Published the project on GitHub Pages.',
        ],
        result: 'Published and available online.',
        status: 'Published',
        links: [
          {
            label: 'Live demo',
            href: 'https://pltdeveloper393.github.io/Product-Adjust/',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/pltdeveloper393/Product-Adjust',
          },
        ],
      },
      portfolio: {
        category: 'Website · React + TypeScript',
        summary: 'This site: design system, RU/EN, accessibility and a future 3D orbit.',
        task: 'Build a personal portfolio that shows projects and approach.',
        solution:
          'React + TypeScript + Vite, a custom CSS design system, GitHub Pages; a R3F 3D orbit is the next step.',
        role: 'Design and development',
        bullets: [
          'Created the visual language based on the resume.',
          'Built the responsive interface and RU/EN switching.',
          'Set up the build and GitHub Pages deployment.',
        ],
        result: 'In development; the 3D orbit is the next step.',
        status: 'In development',
        links: [
          {
            label: 'GitHub',
            href: 'https://github.com/pltdeveloper393/portfolio',
          },
        ],
      },
    },
  },
  skills: {
    label: 'Stack',
    title: 'Skills',
    lead:
      'Levels: core — used regularly; experience — used in projects; basic — fundamentals.',
    levels: {
      core: 'core',
      experience: 'experience',
      basic: 'basic',
    },
    groups: [
      {
        title: 'Languages',
        items: [
          { name: 'Java', level: 'core' },
          { name: 'TypeScript / JavaScript', level: 'core' },
          { name: 'C#', level: 'core' },
          { name: 'SQL', level: 'core' },
          { name: 'Python', level: 'basic' },
          { name: 'C++', level: 'basic' },
        ],
      },
      {
        title: 'Frontend',
        items: [
          { name: 'HTML / CSS', level: 'core' },
          { name: 'React', level: 'experience' },
          { name: 'Next.js', level: 'core' },
          { name: 'MUI', level: 'experience' },
          { name: 'Vite', level: 'experience' },
        ],
      },
      {
        title: 'Backend',
        items: [
          { name: 'Node.js', level: 'core' },
          { name: 'NestJS', level: 'experience' },
          { name: 'Express.js', level: 'experience' },
          { name: 'Prisma', level: 'experience' },
          { name: 'REST API', level: 'experience' },
        ],
      },
      {
        title: 'Data',
        items: [
          { name: 'MS SQL Server', level: 'experience' },
          { name: 'PostgreSQL', level: 'experience' },
        ],
      },
      {
        title: 'Tools',
        items: [
          { name: 'Git', level: 'core' },
          { name: 'Docker', level: 'basic' },
          { name: 'Electron', level: 'experience' },
          { name: 'Android Studio', level: 'basic' },
          { name: 'Cisco Packet Tracer', level: 'basic' },
          { name: '1C', level: 'basic' },
        ],
      },
      {
        title: 'Maintenance',
        items: [
          { name: 'Software installation & setup', level: 'core' },
          { name: 'PC & peripheral diagnostics', level: 'experience' },
          { name: 'Printers & MFPs', level: 'experience' },
          { name: 'Local networks', level: 'basic' },
          { name: 'Technical documentation', level: 'experience' },
        ],
      },
      {
        title: 'Design',
        items: [
          { name: 'UI/UX', level: 'experience' },
          { name: 'Patterns', level: 'basic' },
          { name: 'Prototyping', level: 'experience' },
        ],
      },
    ],
  },
  education: {
    label: 'Learning',
    title: 'Education',
    lead: 'College, major and key subjects.',
    org: 'College of Business and Law',
    period: '2023–2027',
    specialty:
      '5-04-0612-02 Software Development and Maintenance for Information Systems',
    qualification: 'Computer Operator (PC), 5th grade — awarded upon graduation.',
    status: '4th year · graduating 2027 · GPA 8.0/10',
    disciplinesTitle: 'Key subjects',
    disciplines: [
      'Web development',
      'Databases and SQL',
      'Computer networks',
      'OOP',
      'Mobile development',
      '1C',
      'Project management',
    ],
  },
  contact: {
    label: 'Contact',
    title: 'Open to internships and junior opportunities.',
    lead:
      'If you need a developer who understands web, backend and software maintenance — get in touch.',
    email: 'Email',
    github: 'GitHub',
    resume: 'Resume',
    status: 'Open to internships',
  },
  download: {
    title: 'Downloading resume',
    subtitle: 'The file will be saved to your downloads',
  },
  footer: {
    madeWith: 'Built with React + TypeScript',
    source: 'Source code',
    rights: '© 2026 Matvey Andreevich Krasnovsky',
  },
};
