export interface SkillCategory {
  category: string;
  items: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: 'AI / ML Frameworks & Libraries',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV', 'Hugging Face'],
  },
  {
    category: 'Key Concepts & Specializations',
    items: ['Computer Vision', 'NLP', 'Reinforcement Learning', 'Deep Learning', 'Sensor Fusion', 'SLAM', 'LLMs', 'Transformer Architecture'],
  },
  {
    category: 'Robotics & Simulation',
    items: ['ROS / ROS 2', 'Gazebo', 'NVIDIA Isaac Sim', 'UR5 / Robot Arm Control', 'Motion Planning (MoveIt)', 'Arduino'],
  },
  {
    category: 'Developer Tools & Platforms',
    items: ['Git', 'Docker', 'Linux', 'CI/CD (GitHub Actions)', 'Jupyter Notebooks', 'AWS / GCP (Basics)'],
  },
  {
    category: 'Languages',
    items: ['Python', 'C++'],
  },
];