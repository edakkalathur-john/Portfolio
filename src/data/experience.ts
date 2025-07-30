export interface Experience {
  id: number;
  role: string;
  company: string;
  years: string;
  responsibilities: string[];
}

export const experienceData: Experience[] = [
  {
    id: 1,
    role: 'Volunteer Research Assistant',
    company: 'RISE Lab, Arizona State University',
    years: 'Oct 2024 – Present',
    responsibilities: [
      'Collaborated with PhD students to design advanced trajectory planning algorithms for the UR5 robotic arm, implementing smooth circular and multi-waypoint trajectories using Python.',
      'Simulated robotic motions in ROS and Gazebo to validate the stability, precision, and efficiency of planned trajectories.',
      'Integrated TRAC-IK for inverse kinematics, enabling precise real-time control of robotic end-effectors in teleoperation tasks.',
    ],
  },
  {
    id: 2,
    role: 'Robotics & Automation Intern',
    company: 'K-Tech Centre of Excellence in Aerospace',
    years: 'May 2023 – Aug 2023',
    responsibilities: [
      'Modeled and simulated a robotic arm for quality checks using CATIA, SIMULIA, and DELMIA, resulting in a 15% improvement in task accuracy.',
      'Contributed to optimizing the robotic arm\'s design, leading to a 10% reduction in energy consumption and a 5% decrease in cycle time.',
      'Developed simulation models to proactively identify operational issues, enhancing the arm\'s reliability and reducing downtime by 20%.',
    ],
  },
  {
    id: 3,
    role: 'Robotics Club President',
    company: 'Srinivas University Institute of Engineering and Technology',
    years: '2023 - 2024',
    responsibilities: [
      'Led a team of over 20 students in designing, building, and programming competitive robots for national-level competitions.',
      'Organized and conducted technical workshops on ROS, Python, and Arduino, improving club members\' practical skills.',
      'Successfully secured annual funding through university grants and managed the club\'s budget and resources.',
    ],
  },
];