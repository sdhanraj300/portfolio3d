export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights?: string[];
};

export const experiences: Experience[] = [
  {
    role: 'Full Stack Engineer',
    company: 'Data Peace',
    period: 'May 2025 – May 2026',
    description:
      'Built AI-powered health and productivity products end to end, from Next.js interfaces to Python and Node.js backend services.',
    highlights: [
      'Enhanced user engagement by 30% by developing a health-focused chatbot platform with multilingual support and handling text, image, and audio interactions using Microsoft Azure Speech APIs for voice processing.',
      'Improved data accessibility by 40% by designing and developing dashboard interfaces and backend services for multiple projects using Next.js, FastAPI, and OpenAI.',
      'Increased system efficiency by 25% through building backend pipelines with cron jobs that automated message delivery tasks and optimized performance.',
      'Streamlined asset tracking workflows, reducing operational time by 20%, by developing features for an organizational asset management platform using Next.js and modern state management tools.'
    ]
  },
  {
    role: 'Full Stack Intern',
    company: 'iSchoolConnect',
    period: 'April 2025 – May 2025',
    description:
      'Developed and maintained web applications, implemented features, and collaborated with the development team.'
  }
];
