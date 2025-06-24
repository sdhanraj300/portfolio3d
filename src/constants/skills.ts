import { Code, Cpu, Layout, Database, Server, CpuIcon, Code2 } from 'lucide-react';

export type Skill = {
  name: string;
  level: number;
  icon: React.ComponentType<{ className?: string }>;
  category: 'frontend' | 'backend' | 'other';
};

export const skills: Skill[] = [
  {
    name: 'Next.js',
    level: 90,
    icon: Layout,
    category: 'frontend'
  },
  {
    name: 'React',
    level: 92,
    icon: Code,
    category: 'frontend'
  },
  {
    name: 'Node.js',
    level: 88,
    icon: Server,
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
    level: 85,
    icon: Database,
    category: 'backend'
  },
  {
    name: 'Prisma',
    level: 88,
    icon: Cpu,
    category: 'backend'
  },
  {
    name: 'Java',
    level: 82,
    icon: Code2,
    category: 'other'
  },
  {
    name: 'DSA',
    level: 90,
    icon: CpuIcon,
    category: 'other'
  },
  {
    name: 'Tailwind CSS',
    level: 90,
    icon: Code2,
    category: 'frontend'
  },
  {
    name: 'GenAI',
    level: 85,
    icon: CpuIcon,
    category: 'other'
  },
  {
    name: 'JavaScript',
    level: 95,
    icon: Code,
    category: 'frontend'
  },
  {
    name: 'TypeScript',
    level: 90,
    icon: Code,
    category: 'frontend'
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
