import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: 'ResumeGPT',
    description: 'AI-powered career co-pilot for ATS-friendly resumes',
    longDescription:
      'ResumeGPT is an AI career co-pilot that helps job seekers build ATS-friendly resumes. It pairs LangChain.js with OpenAI and Pinecone to deliver context-aware rewriting, semantic search, and personalized interview question generation — while a secure PostgreSQL, Prisma, and NextAuth.js backend manages resume versions and analytics. A TipTap WYSIWYG editor with DOMPurify and a Puppeteer PDF pipeline turns everything into compact, print-ready documents.',
    tags: [
      'Next.js',
      'TypeScript',
      'LangChain.js',
      'OpenAI',
      'Pinecone',
      'PostgreSQL',
      'Prisma',
      'NextAuth.js'
    ],
    image: '/images/resumegpt.png',
    github: 'https://github.com/sdhanraj300/resumegpt',
    demo: 'https://resumegpt-ds.vercel.app/',
    features: [
      'Context-aware AI resume rewriting',
      'Semantic search over your experience',
      'Personalized interview question generation',
      'TipTap WYSIWYG editor with DOMPurify sanitizing',
      'Puppeteer-powered, print-ready PDF export',
      'Secure profiles with NextAuth.js and Prisma'
    ],
    challenge:
      'Keeping AI-generated resume content accurate, safe, and consistently formatted — while controlling vector storage costs as profiles and resume versions grew.',
    solution:
      'Combined Pinecone semantic retrieval with prompt constraints and DOMPurify sanitizing (95% clean output), cached embeddings to cut vector costs by 30%, and generated compact print-ready PDFs through a scalable Puppeteer pipeline.'
  },
  {
    id: 2,
    title: 'MindfulAI',
    description: 'AI-powered mental health companion',
    longDescription:
      'MindfulAI is a mental health support platform that combines OpenAI GPT, Pinecone, and LangChain for context-aware, personalized conversations. Semantic search over chat history and preferences delivers real-time guidance, while mood tracking, guided exercises, and a curated resource library round out the experience.',
    tags: [
      'Next.js',
      'TypeScript',
      'LangChain.js',
      'OpenAI',
      'Pinecone',
      'PostgreSQL',
      'Prisma',
      'Tailwind CSS'
    ],
    image: '/images/mindfulai.png',
    github: 'https://github.com/sdhanraj300/mindfulai',
    demo: 'https://mindfulai.vercel.app/',
    features: [
      'Context-aware AI conversations',
      'Semantic search over past chats',
      'Mood tracking and insights',
      'Guided exercises and breathing tools',
      'Curated mental wellness resource library',
      'Secure auth, chat history and analytics'
    ],
    challenge:
      'Delivering helpful, personalized mental health support at scale while keeping sensitive user data private and infrastructure costs predictable.',
    solution:
      'Built the backend with PostgreSQL (via Prisma) and NextAuth.js to secure profiles, chat history, and analytics for 500+ users, and designed a responsive Tailwind CSS, Framer Motion, and Radix UI interface that lifted user satisfaction by 40%.'
  },
  {
    id: 3,
    title: 'Serenity',
    description: 'A real-time party planning and event coordination app',
    longDescription:
      'Serenity is a full-stack web application built to streamline event planning with real-time features like RSVP tracking, live chat, and media sharing.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    image: '/images/serenity.png',
    github: 'https://github.com/sdhanraj300/serenity',
    demo: 'https://serenityevents.vercel.app/',
    features: [
      'Real-time RSVP updates',
      'Live group chat',
      'Media sharing',
      'Event management',
      'Responsive design'
    ],
    challenge:
      'Building a real-time experience with smooth updates for RSVP and chat while keeping the UI clean and user-friendly.',
    solution:
      'Used WebSockets for real-time updates and focused on performance-optimized UI with Tailwind CSS.'
  },
  {
    id: 4,
    title: 'Case Cobra',
    description: 'E-commerce platform for custom phone cases',
    longDescription:
      'A modern e-commerce platform for designing and ordering custom phone cases.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    image: '/images/casecobra.png',
    github: 'https://github.com/sdhanraj300/casecobra2',
    demo: 'https://casecobra.vercel.app/',
    features: [
      'Custom case designer',
      'Secure checkout',
      'Order tracking',
      'Responsive design',
      'Admin dashboard'
    ],
    challenge: 'Creating an intuitive case designer with real-time preview.',
    solution: 'Built a custom canvas-based designer with WebGL for smooth performance.'
  }
];

