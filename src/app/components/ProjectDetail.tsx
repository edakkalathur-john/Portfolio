'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Canvas } from '@react-three/fiber';

const projectData = {
  'autonomous-chess-robot': {
    title: "Autonomous Chess-Playing Robot",
    description: "A vision-driven robotic system that autonomously plays chess using deep learning and robotic manipulation.",
    fullDescription: `This project combines computer vision, deep learning, and robotics to create a robot capable of playing chess against human opponents.

Key Features:
• Real-time board state detection with YOLOv8
• Stockfish API integration for AI-powered moves
• 4-DOF robotic arm with custom inverse kinematics
• Adaptive lighting compensation
• Multithreaded processing pipeline

Technical Implementation:
• Trained YOLO model on 5,000+ synthetic/real chessboard images
• Implemented Denavit-Hartenberg parameters for arm kinematics
• ROS-based communication between vision/AI/actuation nodes
• OpenCV adaptive thresholding for lighting variations
• G-code optimization for arm movements`,
    tech: ["Python", "YOLOv8", "ROS", "OpenCV", "Arduino"],
    image: "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "#",
    demo: "#",
    results: [
      "95% accuracy in piece detection",
      "8-second average move execution time",
      "Robust operation in 85–1000 lux lighting"
    ]
  },
  'assistive-robot-control': {
    title: "Assistive Robot Control System",
    description: "Vision-based robotic hand control using real-time gesture recognition and machine learning.",
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
    tech: ["MediaPipe", "TensorFlow Lite", "ROS", "Dynamixel", "OpenCV"],
    image: "https://images.pexels.com/photos/4491601/pexels-photo-4491601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "#",
    demo: "#",
    results: [
      "98% gesture recognition accuracy",
      "30% faster task completion vs traditional controls",
      "<100 ms end-to-end latency"
    ]
  },
  'multi-robot-solar': {
    title: "Multi-Robot Solar-Powered System",
    description: "A cooperative multi-robot system with solar-powered UGVs and UAVs for efficient exploration and coverage.",
    fullDescription: `This project focuses on developing an innovative multi-robot system that combines solar-powered Unmanned Ground Vehicles (UGVs) and Unmanned Aerial Vehicles (UAVs) for efficient area exploration and coverage.

Key Features:
• Advanced trajectory planning algorithms
• Energy-aware path planning
• Dynamic coordination between UGVs and UAVs
• Solar power management system
• Real-time task allocation

Technical Implementation:
• Used Python and ROS for robot control
• Implemented MARL (Multi-Agent Reinforcement Learning)
• Developed custom Voronoi partitioning algorithms
• Created energy consumption models
• Built simulation environment in Gazebo`,
    tech: ["Python", "MARL", "ROS", "Voronoi"],
    image: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "https://www.linkedin.com/posts/benhar-john_robotics-multirobotsystems-innovation-activity-7286310065634975744-tMNg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECEhXkBjb3ykTaYApYUxRtTJFvbWwMcGVs",
    demo: "https://youtube.com/demo",
    results: [
      "Achieved 95% coverage efficiency",
      "Reduced energy consumption by 30%",
      "Optimized task allocation with 85% accuracy"
    ]
  },
  'ur5-trajectory': {
    title: "UR5 Trajectory Planning",
    description: "Advanced trajectory planning system for UR5 robotic arm.",
    fullDescription: `This project focuses on planning and executing trajectories for the UR5 robotic arm, generating smooth and continuous motions using advanced trajectory planning techniques.

Key Features:
• Parametric trajectory generation for circular end-effector motion
• Cubic spline interpolation for smooth transitions
• TRAC-IK solver integration for inverse kinematics
• Multi-segment trajectory planning with quintic polynomials

Technical Implementation:
• Developed in Python with ROS integration
• Used SciPy for mathematical computations
• Implemented custom trajectory algorithms
• Created comprehensive testing suite`,
    tech: ["Python", "ROS", "TRAC-IK", "SciPy"],
    image: "https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "https://www.linkedin.com/posts/benhar-john_robotics-ai-computervision-activity-7286282247253434368-3C6o?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECEhXkBjb3ykTaYApYUxRtTJFvbWwMcGVs",
    demo: "https://youtube.com/demo",
    results: [
      "Achieved smooth continuous motion paths",
      "Reduced trajectory execution time by 25%",
      "Implemented successful collision avoidance"
    ]
  },
  'weather-forecasting': {
    title: "Weather Forecasting System",
    description: "Advanced weather forecasting system using machine learning.",
    fullDescription: `This project focuses on creating a robust weather forecasting system by leveraging historical weather data and advanced predictive models.

Key Features:
• Data collection and preprocessing pipeline
• Multiple forecasting models (SARIMA, LSTM)
• Ensemble learning implementation
• Comprehensive evaluation metrics

Technical Implementation:
• Used Python with TensorFlow and scikit-learn
• Implemented time series analysis
• Created custom evaluation metrics
• Developed visualization tools`,
    tech: ["Python", "TensorFlow", "SARIMA", "Pandas", "scikit-learn"],
    image: "https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "https://github.com/BenharJohn/weather-forecasting",
    demo: "https://youtube.com/demo",
    results: [
      "Achieved 90% prediction accuracy",
      "Successfully detected weather anomalies",
      "Implemented real-time forecasting capabilities"
    ]
  },
  'smart-home': {
    title: "Smart Home Automation",
    description: "IoT-based home automation system with real-time monitoring.",
    fullDescription: `A comprehensive smart home automation system that integrates various IoT devices and sensors for intelligent home control and monitoring.

Key Features:
• Real-time temperature and humidity monitoring
• Automated lighting control system
• Security camera integration
• Mobile app control interface
• Energy usage analytics

Technical Implementation:
• React-based frontend with real-time updates
• Node.js backend for device management
• MQTT protocol for device communication
• MongoDB for data storage and analytics`,
    tech: ["React", "Node.js", "MQTT", "MongoDB"],
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "https://github.com/yourusername/smart-home",
    demo: "https://demo.smart-home.com",
    results: [
      "Reduced energy consumption by 25%",
      "Improved home security response time",
      "Automated 80% of daily routines"
    ]
  },
  'ai-chatbot': {
    title: "AI Customer Service Chatbot",
    description: "NLP-powered customer service automation system.",
    fullDescription: `An advanced chatbot system that uses natural language processing to automate customer service interactions across multiple platforms.

Key Features:
• Natural language understanding
• Multi-platform integration
• Sentiment analysis
• Automated ticket creation
• Analytics dashboard

Technical Implementation:
• Python backend with FastAPI
• TensorFlow for NLP models
• Real-time response generation
• Integration with CRM systems`,
    tech: ["Python", "TensorFlow", "NLP", "FastAPI"],
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "",
    demo: "",
    results: [
      "90% customer query resolution rate",
      "Reduced response time by 60%",
      "Improved customer satisfaction by 40%"
    ]
  },
  'data-analytics': {
    title: "Real-time Data Analytics Platform",
    description: "Scalable real-time data processing and analytics system.",
    fullDescription: `A comprehensive platform for processing and analyzing large-scale data streams in real-time, featuring interactive dashboards and automated reporting.

Key Features:
• Real-time data processing
• Interactive visualizations
• Automated report generation
• Custom analytics pipelines
• Data export capabilities

Technical Implementation:
• Apache Kafka for stream processing
• Elasticsearch for data storage
• React-based dashboard
• Python analytics backend`,
    tech: ["Python", "Apache Kafka", "Elasticsearch", "React"],
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "https://github.com/yourusername/data-analytics",
    demo: "https://demo.data-analytics.com",
    results: [
      "Processed 1M+ events per second",
      "Reduced analysis time by 75%",
      "99.9% system uptime"
    ]
  }
};

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectData[id as keyof typeof projectData] : null;

  if (!project) {
    return <div>Project not found</div>;
  }

  const hasGitHub = project.github && project.github !== '#';

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-zinc-400 hover:text-white mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <p className="text-zinc-400 text-lg mb-6">{project.description}</p>

          {hasGitHub && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition-colors"
            >
              <Github className="w-4 h-4" />
              View Source
            </a>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-zinc-900/50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
              <div className="prose prose-invert max-w-none">
                {project.fullDescription.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-zinc-400 whitespace-pre-line">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-zinc-900/50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-zinc-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-zinc-900/50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Key Results</h2>
              <ul className="space-y-2">
                {project.results.map((result, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-2 text-zinc-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2 flex-shrink-0" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}