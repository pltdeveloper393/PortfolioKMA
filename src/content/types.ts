export type Lang = 'ru' | 'en';

export type ProjectId =
  | 'zazerby'
  | 'journal'
  | 'epson'
  | 'lshop'
  | 'product-adjust'
  | 'portfolio';

export type SkillLevel = 'core' | 'experience' | 'basic';

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectContent = {
  category: string;
  summary: string;
  task: string;
  solution: string;
  role: string;
  bullets: string[];
  result: string;
  status: string;
  privateNote?: string;
  links?: ProjectLink[];
};

export type Content = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    projects: string;
    skills: string;
    education: string;
    contact: string;
    resume: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    orbMark: string;
    role: string;
    tagline: string;
    status: string;
    ctaProjects: string;
    ctaResume: string;
    orbTags: string[];
  };
  about: {
    label: string;
    title: string;
    paragraphs: string[];
    facts: { label: string; value: string }[];
  };
  projects: {
    label: string;
    title: string;
    lead: string;
    viewCase: string;
    close: string;
    viewOrbit: string;
    viewList: string;
    hint: string;
    meta: {
      role: string;
      stack: string;
      year: string;
      status: string;
      links: string;
    };
    sections: {
      task: string;
      solution: string;
      whatIDid: string;
      result: string;
    };
    items: Record<ProjectId, ProjectContent>;
  };
  skills: {
    label: string;
    title: string;
    lead: string;
    levels: {
      core: string;
      experience: string;
      basic: string;
    };
    groups: {
      title: string;
      items: { name: string; level: SkillLevel }[];
    }[];
  };
  education: {
    label: string;
    title: string;
    lead: string;
    org: string;
    period: string;
    specialty: string;
    qualification: string;
    status: string;
    disciplinesTitle: string;
    disciplines: string[];
  };
  contact: {
    label: string;
    title: string;
    lead: string;
    email: string;
    github: string;
    resume: string;
    status: string;
  };
  footer: {
    madeWith: string;
    source: string;
    rights: string;
  };
};
