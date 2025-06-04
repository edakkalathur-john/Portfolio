import React from 'react';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { RobotScene } from '@/components/RobotScene';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Consolidated project data with full entries
const projectData = {
  'assistive-robot-control': {
    title: 'Assistive Robot Control System',
    description: 'Vision-based robotic hand control using real-time gesture recognition and machine learning.',
    fullDescription: `A human-robot interaction system enabling control of a 3D-printed robotic hand through hand gestures.

Key Features:
• MediaPipe-based 21-point hand landmark detection
• Hybrid SVM-CNN gesture classifier
• Tendon-driven robotic hand mechanism
• Kalman-filtered input smoothing
• Low-latency UDP communication

Technical Implementation:
• Trained on 8,000+ gesture samples across diverse users
• Implemented PCA for landmark dimensionality reduction
• Dynamixel servo control for finger articulation
• ROS integration for sensor fusion
• TensorFlow Lite for edge deployment`,
    tech: ['MediaPipe', 'TensorFlow Lite', 'ROS', 'Dynamixel', 'OpenCV'],
    image: 'https://images.pexels.com/photos/4491601/pexels-photo-4491601.jpeg',
    github: '#',
    demo: '#',
    results: [
      '98% gesture recognition accuracy',
      '30% faster task completion vs traditional controls',
      '<100 ms end-to-end latency'
    ],
  },
  'multi-robot-solar': {
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
    image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg',
    github: 'https://linkedin.com/in/benhar-john',
    demo: 'https://youtube.com/demo',
    results: [
      '95% coverage efficiency',
      '30% reduced energy consumption',
      '85% task allocation accuracy'
    ],
  },
  'ur5-trajectory': {
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
    image: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg',
    github: 'https://linkedin.com/in/benhar-john',
    demo: 'https://youtube.com/demo',
    results: [
      'Smooth continuous motion',
      '25% faster execution',
      'Integrated collision avoidance'
    ],
  },
  'weather-forecasting': {
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
    image: 'https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg',
    github: 'https://github.com/BenharJohn/weather-forecasting',
    demo: 'https://youtube.com/demo',
    results: [
      '90% accuracy',
      'Anomaly detection',
      'Real-time forecasting'
    ],
  },
  'smart-home': {
    title: 'Smart Home Automation',
    description: 'IoT-based home automation with real-time monitoring.',
    fullDescription: `An integrated system controlling lighting, climate, and security via MQTT and a mobile app.

Key Features:
• Sensor network
• Automated lighting
• Security integration

Technical Implementation:
• React frontend
• Node.js + MongoDB
• MQTT communications`,
    tech: ['React', 'Node.js', 'MQTT', 'MongoDB'],
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    github: 'https://github.com/yourusername/smart-home',
    demo: 'https://demo.smart-home.com',
    results: [
      '25% energy savings',
      'Improved security',
      '80% routine automation'
    ],
  },
  'ai-chatbot': {
    title: 'AI Customer Service Chatbot',
    description: 'NLP-powered customer support automation.',
    fullDescription: `A FastAPI-based chatbot with TensorFlow NLU and sentiment analysis.

Key Features:
• Multi-platform
• Ticket creation
• Analytics dashboard

Technical Implementation:
• Python + FastAPI
• TensorFlow models`,
    tech: ['Python', 'TensorFlow', 'NLP', 'FastAPI'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    github: '',
    demo: '',
    results: [
      '90% resolution',
      '60% faster responses',
      '40% satisfaction gain'
    ],
  },
  'data-analytics': {
    title: 'Real-time Data Analytics Platform',
    description: 'Scalable stream processing and dashboards.',
    fullDescription: `An end-to-end analytics suite built with Kafka, Elasticsearch, and React.

Key Features:
• High throughput
• Dashboards
• Reports

Technical Implementation:
• Kafka streams
• Elasticsearch dB
• React frontend`,
    tech: ['Python', 'Apache Kafka', 'Elasticsearch', 'React'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
    github: 'https://github.com/yourusername/data-analytics',
    demo: 'https://demo.data-analytics.com',
    results: [
      '1M events/sec',
      '75% faster analysis',
      '99.9% uptime'
    ],
  }
};

interface Params {
  id?: string;
}

export default function ProjectDetail({ params }: { params: Params }) {
  const id = params.id;
  const project = id ? projectData[id as keyof typeof projectData] : null;

  if (!project) notFound();

  const hasGitHub = project.github && project.github !== '#';

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
        </Link>

        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <p className="text-zinc-400 text-lg mb-6">{project.description}</p>

          {hasGitHub && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition-colors">
              <Github className="w-4 h-4" /> View Source
            </a>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-zinc-900/50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
              <div className="prose prose-invert max-w-none">
                {project.fullDescription.split('\n').map((paragraph, idx) => <p key={idx} className="text-zinc-400 whitespace-pre-line">{paragraph}</p>)}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-zinc-900/50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => <span key={idx} className="px-3 py-1 bg-zinc-800 rounded-full text-sm">{tech}</span>)}
              </div>
            </div>
            <div className="bg-zinc-900/50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Key Results</h2>
              <ul className="space-y-2">
                {project.results.map((res, idx) => <li key={idx} className="flex items-start gap-2 text-zinc-400"><span className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2 flex-shrink-0" />{res}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
