export const links = {
  email: 'k.james.close@gmail.com',
  github: 'https://github.com/Kyle-Close',
  linkedin: 'https://www.linkedin.com/in/kyle-close/',
  resume: '/Kyle_Close_Resume.pdf',
};

export const sections = [
  { id: 'home', file: 'index.tsx', lang: 'tsx' },
  { id: 'about', file: 'about.md', lang: 'md' },
  { id: 'projects', file: 'projects.json', lang: 'json' },
  { id: 'contact', file: 'contact.sh', lang: 'sh' },
] as const;

export type SectionId = (typeof sections)[number]['id'];
