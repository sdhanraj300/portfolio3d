import {
  Code,
  Code2,
  Cpu,
  Database,
  Layout,
  Server,
  Sparkles,
  Layers,
  Boxes,
  Braces,
  Brain,
  Network,
  ShieldCheck,
  KeyRound,
  Workflow,
  Table2
} from 'lucide-react';

export type Skill = {
  name: string;
  level: number;
  icon: React.ComponentType<{ className?: string }>;
  category: 'frontend' | 'backend' | 'other';
};

export const skills: Skill[] = [
  {
    name: 'JavaScript',
    level: 95,
    icon: Code,
    category: 'frontend'
  },
  {
    name: 'TypeScript',
    level: 92,
    icon: Code2,
    category: 'frontend'
  },
  {
    name: 'React.js',
    level: 92,
    icon: Code,
    category: 'frontend'
  },
  {
    name: 'Next.js',
    level: 92,
    icon: Layout,
    category: 'frontend'
  },
  {
    name: 'Tailwind CSS',
    level: 90,
    icon: Sparkles,
    category: 'frontend'
  },
  {
    name: 'Node.js',
    level: 90,
    icon: Server,
    category: 'backend'
  },
  {
    name: 'Express.js',
    level: 88,
    icon: Network,
    category: 'backend'
  },
  {
    name: 'NestJS',
    level: 82,
    icon: Layers,
    category: 'backend'
  },
  {
    name: 'REST APIs',
    level: 90,
    icon: Workflow,
    category: 'backend'
  },
  {
    name: 'PostgreSQL',
    level: 88,
    icon: Database,
    category: 'backend'
  },
  {
    name: 'MongoDB',
    level: 85,
    icon: Database,
    category: 'backend'
  },
  {
    name: 'SQL',
    level: 88,
    icon: Table2,
    category: 'backend'
  },
  {
    name: 'Prisma',
    level: 88,
    icon: Boxes,
    category: 'backend'
  },
  {
    name: 'NextAuth.js',
    level: 86,
    icon: KeyRound,
    category: 'backend'
  },
  {
    name: 'JWT Auth',
    level: 85,
    icon: ShieldCheck,
    category: 'backend'
  },
  {
    name: 'Zod',
    level: 85,
    icon: Braces,
    category: 'backend'
  },
  {
    name: 'Pinecone',
    level: 80,
    icon: Brain,
    category: 'backend'
  },
  {
    name: 'LangChain.js',
    level: 85,
    icon: Cpu,
    category: 'other'
  },
  {
    name: 'Java',
    level: 82,
    icon: Code2,
    category: 'other'
  }
];

export const categories = [
  { id: 'all', name: 'All', count: 0 },
  {
    id: 'frontend',
    name: 'Frontend',
    count: 0
  },
  {
    id: 'backend',
    name: 'Backend',
    count: 0
  },
];

// Calculate counts for each category
categories[0].count = skills.length;
categories[1].count = skills.filter(skill => skill.category === 'frontend').length;
categories[2].count = skills.filter(skill => skill.category === 'backend').length;
