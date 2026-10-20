import type { ProjectId } from '../content/types';

export type ProjectTone =
  | 'tan'
  | 'espresso'
  | 'olive'
  | 'sand'
  | 'clay'
  | 'paper';

export type ProjectMeta = {
  id: ProjectId;
  name: string;
  number: string;
  year: string;
  stack: string[];
  tone: ProjectTone;
};

export const projects: ProjectMeta[] = [
  {
    id: 'zazerby',
    name: 'ZazerBy',
    number: '01',
    year: '2026',
    stack: [
      'Next.js',
      'TypeScript',
      'Payload CMS',
      'NestJS',
      'Prisma',
      'PostgreSQL',
      'Docker',
    ],
    tone: 'tan',
  },
  {
    id: 'journal',
    name: 'Electronic-Journal_393Team',
    number: '02',
    year: '2026',
    stack: [
      'React 19',
      'TypeScript',
      'NestJS',
      'Prisma',
      'MS SQL Server',
    ],
    tone: 'espresso',
  },
  {
    id: 'epson',
    name: 'Epson Work Panel',
    number: '03',
    year: '2026',
    stack: ['Electron', 'React', 'TypeScript', 'Python', 'SQLite', 'NAPS2'],
    tone: 'olive',
  },
  {
    id: 'lshop',
    name: 'L_Shop',
    number: '04',
    year: '2025',
    stack: ['TypeScript', 'Node.js', 'Express.js', 'HTML/CSS', 'SPA'],
    tone: 'sand',
  },
  {
    id: 'product-adjust',
    name: 'Product-Adjust',
    number: '05',
    year: '2026',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
    tone: 'clay',
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    number: '06',
    year: '2026',
    stack: ['React', 'TypeScript', 'Vite', 'CSS'],
    tone: 'paper',
  },
];
