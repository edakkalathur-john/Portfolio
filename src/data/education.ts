export interface Education {
  id: number;
  degree: string;
  institution: string;
  years: string;
  gpa: string;
  description: string;
}

export const educationData: Education[] = [
  {
    id: 1,
    degree: 'Master of Science in Robotics & Autonomous Systems (AI)',
    institution: 'Arizona State University',
    years: '2024 - 2026',
    gpa: '3.89',
    description: 'Specializing in the application of Artificial Intelligence and advanced mathematical concepts to solve complex problems in robotics. Key coursework includes: Advances in Robotics Learning, Multi-Robot Systems, Knowledge Representation.',
  },
  {
    id: 2,
    degree: 'Bachelor of Technology in Robotics, AI & Machine Learning',
    institution: 'Srinivas University',
    years: '2020 - 2024',
    gpa: '8.5',
    description: 'Developed a strong foundation in intelligent systems through comprehensive studies in software engineering. Foundational coursework included: Machine Learning, Computer Vision, and Data Structures & Algorithms.',
  },
];