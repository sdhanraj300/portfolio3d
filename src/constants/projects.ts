import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Serenity',
    description: 'A real-time party planning and event coordination app',
    longDescription: 'Serenity is a full-stack web application built to streamline event planning with real-time features like RSVP tracking, live chat, and media sharing.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    image: '/images/serenity.png',
    github: 'https://github.com/yourusername/serenity',
    demo: 'https://serenity-demo.vercel.app',
    features: [
      'Real-time RSVP updates',
      'Live group chat',
      'Media sharing',
      'Event management',
      'Responsive design'
    ],
    challenge: 'Building a real-time experience with smooth updates for RSVP and chat while keeping the UI clean and user-friendly.',
    solution: 'Used WebSockets for real-time updates and focused on performance-optimized UI with Tailwind CSS.'
  },
  {
    id: 2,
    title: 'MindfulAI',
    description: 'AI-powered mental health assistant',
    longDescription: 'A conversational AI assistant that provides mental health support and resources.',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    image: '/images/mindfulai.png',
    github: 'https://github.com/yourusername/mindfulai',
    demo: 'https://mindfulai-demo.vercel.app',
    features: [
      'AI-powered chat',
      'Mood tracking',
      'Resource library',
      'Privacy-focused',
      'Mobile-friendly'
    ],
    challenge: 'Ensuring the AI provides helpful and appropriate mental health support.',
    solution: 'Implemented strict content moderation and integrated with professional mental health resources.'
  },
  {
    id: 3,
    title: 'Case Cobra',
    description: 'E-commerce platform for custom phone cases',
    longDescription: 'A modern e-commerce platform for designing and ordering custom phone cases.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    image: '/images/casecobra.png',
    github: 'https://github.com/yourusername/casecobra',
    demo: 'https://casecobra-demo.vercel.app',
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
