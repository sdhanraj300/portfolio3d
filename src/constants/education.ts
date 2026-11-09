export type Education = {
  degree: string;
  institution: string;
  period: string;
  description: string;
};

export const education: Education[] = [
  {
    degree: 'Masters in Computer Science',
    institution: 'CAU Kiel (Christian-Albrechts-Universität zu Kiel)',
    period: 'April 2026 – 2028',
    description:
      'Pursuing a Master of Science in Computer Science with a focus on distributed systems, machine learning, and modern software engineering practices.'
  },
  {
    degree: 'B.Tech in Information Technology',
    institution: 'AKTU, Noida (J.S.S. Academy of Technical Education)',
    period: 'July 2021 – 2025',
    description:
      'Studied core computer science subjects including Data Structures, Algorithms, Database Management Systems, Computer Networks, and Software Engineering. Gained hands-on experience with various programming languages and development tools.'
  }
];
