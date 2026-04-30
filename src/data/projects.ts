export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  docs?: string;
  stars?: number;
  featured: boolean;
  image?: string;
}

export const projects: Project[] = [
  {
    slug: 'project-alpha',
    title: 'Project Alpha',
    description: 'A CLI tool for automating deployments and managing cloud infrastructure. Built with modern practices and extensive testing.',
    tech: ['Go', 'Rust'],
    github: 'https://github.com/yourname/project-alpha',
    demo: 'https://project-alpha.demo.com',
    docs: 'https://docs.project-alpha.dev',
    stars: 128,
    featured: true,
    image: '/images/projects/project-alpha.png',
  },
  {
    slug: 'web-app',
    title: 'Web App',
    description: 'Full-stack web application with real-time features and modern UI.',
    tech: ['React', 'TypeScript'],
    github: 'https://github.com/yourname/web-app',
    featured: false,
  },
  {
    slug: 'api-server',
    title: 'API Server',
    description: 'REST API server with authentication and rate limiting.',
    tech: ['Node.js', 'TypeScript'],
    github: 'https://github.com/yourname/api-server',
    stars: 45,
    featured: false,
  },
  {
    slug: 'discord-bot',
    title: 'Discord Bot',
    description: 'Moderation and utility bot for Discord servers.',
    tech: ['Python'],
    github: 'https://github.com/yourname/discord-bot',
    featured: false,
  },
];

export const featuredProject = projects.find(p => p.featured);
export const otherProjects = projects.filter(p => !p.featured);
