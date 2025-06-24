export type Education = {
  degree: string;
  institution: string;
  period: string;
  description: string;
};

export const education: Education[] = [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'J.S.S. Academy of Technical Education, Noida',
    period: '2021 - 2025',
    description: 'Studied core computer science subjects including Data Structures, Algorithms, Database Management Systems, Computer Networks, and Software Engineering. Gained hands-on experience with various programming languages and development tools.'
  },
  {
    degree: 'Class 10th & Class 12th',
    institution: 'Carman School, Dehradun',
    period: '2018 - 2020',
    description: 'Completed higher secondary education with focus on Mathematics, Physics, Chemistry, and Computer Science. Developed strong analytical and problem-solving skills.'
  }
];
