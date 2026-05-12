import type {
  NavLink,
  PersonalInfo,
  Project,
  SocialLink,
} from '../types/content.types';

/**
 * Central source of truth for all portfolio content.
 * Update this file to change any text, links, or project data on the site.
 */

/** Primary identity shown in the Hero section */
export const PERSONAL_INFO: PersonalInfo = {
  name: 'Shambir Serhiy',
  role: 'Junior Frontend Deweloper',
  tagline:
    'I build responsive interfaces and practical web applications using JavaScript, TypeScript, and React.',
  email: 'realistic.sergio@gmail.com',
  resumeUrl: '/Serhiy Shambir cv.pdf',
};

/** Skills displayed in the "Frontend Stack" column of the About section */
export const FRONTEND_SKILLS = [
  'JavaScript',
  'TypeScript',
  'React',
  'Tailwind CSS',
  'HTML',
  'CSS',
  'Vite',
  'REST API',
];

/** Tools displayed in the "Tools" column of the About section */
export const TOOLS_SKILLS = [
  'Git',
  'GitHub',
  'Postman',
  'Figma',
  'npm',
  'VS Code',
];

/** Section links rendered in the main navigation */
export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
];

/** External profile links shown in the footer */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/realisticsergio',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/serhiy-shambir-53321a3bb',
    icon: 'linkedin',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/realisticsergio',
    icon: 'telegram',
  },
];

/** Featured projects displayed in the main Projects section */
export const PROJECTS: Project[] = [
  {
    id: 3,
    title: 'Furniture Store',
    description:
      'Team-based furniture store frontend with responsive UI and REST API integration. Includes product listing, filtering, and dynamic data rendering.',
    challenge:
      'Maintaining UI consistency and structure across multiple contributors.',
    solution:
      'Coordinated development workflow, defined shared UI patterns, and ensured consistency across the codebase.',
    technologies: ['JavaScript', 'Vite', 'REST API', 'CSS'],
    liveUrl: 'https://vitaliifedunyk.github.io/bug-hunters/',
    githubUrl: 'https://github.com/realisticsergio/bug-hunters',
    category: 'team',
    filters: ['team-project'],
  },
  {
    id: 1,
    title: 'Portfolio',
    description:
      'Personal portfolio website built with React, TypeScript, and Tailwind CSS. Designed to present projects and skills through a clean, responsive interface with animated UI.',
    challenge:
      'Creating a portfolio that feels structured and focused without unnecessary complexity.',
    solution:
      'Organized content into clear sections and improved visual hierarchy to highlight key information.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Vite',
    ],
    liveUrl: 'https://portfolio-s9xw.vercel.app/',
    githubUrl: 'https://github.com/realisticsergio/Portfolio',
    category: 'personal',
    filters: ['applications'],
  },
  {
    id: 2,
    title: 'EcoTote',
    description:
      'Responsive landing page for an eco-focused brand built with Tailwind CSS. Focused on clean layout, typography, and adaptive design.',
    challenge: 'Keeping visual consistency across different screen sizes.',
    solution:
      'Improved layout structure, spacing system, and typography scaling.',
    technologies: ['JavaScript', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://vitaliifedunyk.github.io/eco-tote/',
    githubUrl: 'https://github.com/realisticsergio/eco-tote-project',
    category: 'personal',
    filters: ['landing-pages'],
  },
];

/** Introductory paragraphs displayed in the About section */
export const ABOUT_PARAGRAPHS = [
  'Frontend developer focused on building responsive interfaces and practical web applications.',
  'I work with JavaScript, TypeScript, React, and Tailwind CSS, with experience in API integration and UI development.',
  'I focus on clear structure, predictable UI behavior, and maintainable frontend code.',
];
