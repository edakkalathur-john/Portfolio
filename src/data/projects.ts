export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  image: string;
  github?: string;
  linkedin?: string;
  demo?: string;
  results: string[];
  status?: string;
}

export const projects: Project[] = [
  {
    id: 'autonomous-chess-robot',
    title: 'Project ARC',
    description: 'Vision-driven robotic system autonomously playing chess via deep learning perception and manipulation.',
    fullDescription: `This project features an autonomous robot capable of playing a full game of chess against a human opponent by perceiving the board and physically moving pieces.

Key Features:
• Autonomous gameplay driven by a computer vision pipeline
• Real-time detection and identification of all chess pieces
• High-precision robotic arm manipulation for seamless interaction
• Responsive game-play through an optimized vision and control system

Technical Implementation:
• Used Python and OpenCV for high-speed image processing and game state management.
• Implemented YOLO and custom CNNs for piece detection, achieving 95% accuracy.
• Designed and simulated robot kinematics for precise and safe arm movements.
• Integrated the complete system for robust, end-to-end gameplay.`,
    tech: ['Python', 'OpenCV', 'YOLO', 'CNNs', 'Robotics'],
    image: '/images/chess1.jpg',
    github: 'https://github.com/BenharJohn/Project-ARC',
    demo: 'https://youtu.be/mXT7cy6JQiU',
    results: [
      '95% accuracy in move identification',
      'Real-time gameplay responsiveness',
      'Seamless physical piece interaction'
    ]
  },
  {
    id: 'assistive-robot-control',
    title: 'Assistive Robot Control System',
    description: 'Vision-based robotic hand control using real-time gesture recognition and machine learning.',
    fullDescription: `An intuitive human-robot interface designed to control a 3D-printed robotic hand using hand gestures captured through a standard webcam. The system translates finger counts into commands, enabling fluid and direct manipulation of the hardware.

Key Features:
• Real-time gesture capture via standard webcam
• Contour-based finger counting for multi-gesture recognition (fist, open palm, pointing, etc.)
• Articulated 5-finger robotic hand with servo-driven actuation
• Low-latency serial communication protocol for immediate hardware response
• Intuitive user interface with a defined Region of Interest (ROI) for interaction

Technical Implementation:
• Developed using Python with OpenCV for core image processing tasks.
• Utilized HSV color-space thresholding and morphological transformations to isolate the user's hand.
• Implemented a gesture recognition algorithm based on contour analysis and convexity defects to count extended fingers.
• Arduino UNO programmed in C++ to translate serial commands into precise PWM signals for MG90s servo motors.
• Established a robust communication link between the Python application and the Arduino using the PySerial library.`,
    tech: ['Python', 'OpenCV', 'Arduino', 'PySerial', 'NumPy'],
    image: '/images/hand2.jpg',
    github: 'https://github.com/BenharJohn/Project-ARC',
    demo: 'https://youtube.com/shorts/V_11GS3dcyU?feature=share',
    results: [
      'Achieved real-time control with minimal perceptible lag between gesture and action',
      'Successfully distinguished between multiple distinct hand gestures (e.g., open palm, fist)',
      'Created a reliable and replicable system using accessible hardware and open-source software'
    ]
  },
  {
    id: 'ai-chatbot',
    title: 'FocusAssist - The AI-Powered Productivity & Wellness Companion',
    description: 'An AI-powered web app that merges a proactive productivity assistant with an empathetic wellness journal.',
    fullDescription: `A modern web application designed to be a holistic companion for productivity and mental well-being. It moves beyond a standard to-do list by integrating a sophisticated, context-aware AI that serves as both a proactive personal assistant and an empathetic journal.

Key Features
• Unified AI Agent: A powerful AI "brain" (Google Gemini) that switches between an efficient assistant and an empathetic listener.
• AI-Powered Task Decomposition: The AI uses Function Calling to intelligently break down complex goals into scheduled, actionable subtasks.
• Persistent & Context-Aware Journal: A safe space for reflective conversation where the AI remembers previous topics for stateful, meaningful dialogue.
• Real-Time Task Management: A Supabase backend with Realtime Subscriptions ensures the task list updates instantly for all users.
• Interactive Focus Mode: A Pomodoro timer with integrated ambient sounds and a unique "Pattern Recall" brain-training game for mindful breaks.
• Intelligent Learning Tools: Includes an AI-powered concept explainer, text summarizer, and a Flashcard Generator.

Development Status & Roadmap
FocusAssist is currently under active development. Core features like AI task decomposition, the persistent journal, and real-time task management are functional.

Upcoming Features:
• Mobile-First Responsive Design: Ensuring a seamless experience on all devices.
• Third-Party Integrations: Connecting with Google Calendar and other services.
• Deeper Analytics: Providing users with insights into their productivity and wellness patterns.`,
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Gemini API', 'Supabase', 'Netlify Functions'],
    image: '/images/chat.jpg',
    demo: 'https://prismatic-pastelito-2fbd24.netlify.app/',
    results: [
      'Successfully integrated Gemini API for complex, multi-step agentic tasks',
      'Established a real-time, bi-directional data flow with Supabase subscriptions',
      'Designed and implemented a secure, scalable serverless architecture on Netlify'
    ],
    status: 'In Development'
  },
  {
    id: 'multi-robot-solar',
    title: 'Multi-Robot Solar-Powered System',
    description: 'Cooperative multi-robot system with solar-powered UGVs and UAVs for efficient exploration and coverage.',
    fullDescription: `This project focuses on developing an innovative multi-robot system that combines solar-powered UGVs and UAVs for efficient area exploration and coverage.

Key Features:
• Advanced trajectory planning algorithms
• Energy-aware path planning
• Dynamic coordination between UGVs and UAVs
• Solar power management system
• Real-time task allocation

Technical Implementation:
• Used Python and ROS for robot control
• Implemented MARL
• Developed custom Voronoi partitioning
• Built energy consumption models
• Simulated in Gazebo`,
    tech: ['Python', 'MARL', 'ROS', 'Voronoi'],
    image: '/images/mrs.jpg',
    linkedin: 'https://www.linkedin.com/posts/benhar-john_robotics-multirobotsystems-innovation-activity-7286310065634975744-tMNg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECEhXkBjb3ykTaYApYUxRtTJFvbWwMcGVs',
    results: [
      '95% coverage efficiency',
      '30% reduced energy consumption',
      '85% task allocation accuracy'
    ]
  },
  {
    id: 'ur5-trajectory',
    title: 'UR5 Trajectory Planning',
    description: 'Advanced trajectory planning system for UR5 robotic arm.',
    fullDescription: `Planning and executing smooth continuous trajectories for the UR5 arm using cubic splines and IK solvers.

Key Features:
• Circular motion generation
• Quintic polynomial segments
• TRAC-IK integration
• Collision avoidance

Technical Implementation:
• Python + ROS
• SciPy-based computations
• Custom trajectory algorithms`,
    tech: ['Python', 'ROS', 'TRAC-IK', 'SciPy'],
    image: '/images/ur5.jpg',
    linkedin: 'https://www.linkedin.com/posts/benhar-john_robotics-ai-computervision-activity-7286282247253434368-3C6o?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECEhXkBjb3ykTaYApYUxRtTJFvbWwMcGVs',
    results: [
      'Smooth continuous motion',
      '25% faster execution',
      'Integrated collision avoidance'
    ]
  },
  {
    id: 'weather-forecasting',
    title: 'Weather Forecasting System',
    description: 'Advanced weather forecasting system using ML.',
    fullDescription: `A robust forecasting platform leveraging SARIMA and LSTM models on historical weather data.

Key Features:
• Data pipeline
• Ensemble learning
• Real-time predictions

Technical Implementation:
• TensorFlow + scikit-learn
• Time series analysis`,
    tech: ['Python', 'TensorFlow', 'SARIMA', 'Pandas', 'scikit-learn'],
    image: '/images/weather.jpg',
    github: 'https://github.com/BenharJohn/weather-forecasting',
    results: [
      '90% accuracy',
      'Anomaly detection',
      'Real-time forecasting'
    ]
  }
];

// Helper function to get project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

// Helper function to get all project IDs
export const getProjectIds = (): string[] => {
  return projects.map(project => project.id);
};