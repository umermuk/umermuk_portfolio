import {
  Database,
  Layout,
  Server,
  Mail,
  Cpu,
  Cloud,
  MessageSquare,
  ShoppingCart,
  Zap,
  Bell,
  BarChart3,
  Trophy,
  Activity,
  Terminal,
  Settings
} from "lucide-react";
import { FaGithub, FaLinkedin, FaNodeJs, FaLaravel, FaPhp, FaAws } from "react-icons/fa";
import { SiPostgresql, SiMysql, SiDocker, SiTailwindcss, SiJavascript, SiTypescript, SiRedis, SiSocketdotio } from "react-icons/si";

export const personalInfo = {
  name: "Umer Mukhtar",
  title: "Architecting Robust Backend Systems",
  subtitle: "4+ years of expertise in PHP Laravel & Node.js. Specializing in complex logic, real-time engines, and scalable architectures.",
  impactLine: "Specializing in Scalable Backend Architecture",
  email: "umerwell1234@gmail.com",
  socials: {
    github: "https://github.com/umermuk",
    linkedin: "https://www.linkedin.com/in/umer-mukhtar-521b69275"
  }
};

export const aboutContent = {
  paragraphs: [
    "As a Senior Backend Engineer with extensive experience in Laravel and Node.js, I specialize in designing and implementing high-performance server-side architectures. My focus is on creating scalable, secure, and maintainable systems that handle complex business logic and high traffic volumes.",
    "I have successfully delivered sophisticated real-time solutions, including bidding engines and notification hubs, leveraging WebSockets and Redis for sub-100ms latency. I am passionate about database optimization, microservices architecture, and implementing robust CI/CD pipelines to ensure seamless deployment and system reliability.",
    "My technical leadership involves mentoring developers, establishing best practices in API design (REST/GraphQL), and managing cloud infrastructure (AWS/VPS). I thrive in environments that challenge my problem-solving skills and require deep technical expertise in backend engineering."
  ]
};

export const logicSpecialist = [
  {
    title: "Sport Scoring Engines",
    description: "Real-time Padel, Futsal, and Cricket scoring systems with complex state management.",
    icon: Trophy
  },
  {
    title: "Real-time Ecosystems",
    description: "High-concurrency bidding systems and chat applications using WebSockets.",
    icon: Zap
  },
  {
    title: "Automation & DevOps",
    description: "Streamlining deployments with Docker, CI/CD pipelines, and VPS management.",
    icon: Settings
  }
];

export const skills = [
  {
    category: "System Architecture",
    description: "Designing robust foundations for complex applications.",
    icon: Server,
    items: [
      { name: "RBAC & Security", icon: Database, highlight: true },
      { name: "API Design (REST/GraphQL)", icon: Layout, highlight: true },
      { name: "Database Schema Design", icon: Database },
      { name: "Microservices", icon: Cpu }
    ]
  },
  {
    category: "Real-time Solutions",
    description: "High-concurrency systems with instant synchronization.",
    icon: Zap,
    items: [
      { name: "WebSockets / Socket.io", icon: SiSocketdotio, highlight: true },
      { name: "Bidding Engines", icon: Zap, highlight: true },
      { name: "Redis Caching", icon: SiRedis },
      { name: "Message Queues", icon: Bell }
    ]
  },
  {
    category: "Cloud & DevOps",
    description: "Ensuring uptime, scalability, and automated deployments.",
    icon: Cloud,
    items: [
      { name: "Docker & Containerization", icon: SiDocker, highlight: true },
      { name: "CI/CD Pipelines", icon: FaGithub, highlight: true },
      { name: "AWS S3 & Cloud Storage", icon: FaAws },
      { name: "VPS & Server Management", icon: Server }
    ]
  }
];

import { FaFistRaised, FaGavel, FaUsersCog, FaShoppingCart } from "react-icons/fa";

export const projects = [
  {
    id: 1,
    title: "Real-Time Multi-Sport Scoring Engine",
    description: "Architected the backend for real-time scoring of Padel, Futsal, and Cricket.",
    techDescription: "Implemented complex state management and business rules (e.g., Padel deuce/tie-break logic) with high reliability. Engineered a high-concurrency event-driven architecture to handle real-time match state transitions without latency spikes.",
    keyFeatures: ["Complex Business Logic", "Real-Time State Management", "High Availability"],
    tech: ["Laravel", "WebSockets", "MySQL", "RealTime"],
    icon: FaFistRaised,
    feature: "Engineered Score Sync"
  },
  {
    id: 2,
    title: "High-Concurrency Bidding System",
    description: "Developed a robust bidding engine that handled high concurrent user traffic.",
    techDescription: "Implemented real-time bid updates, race condition prevention during automated winner selection, and database transaction locking. Focused on atomic operations to ensure data integrity during peak auction events.",
    keyFeatures: ["High Concurrency", "Atomic Transactions", "Real-Time Bid Sync"],
    tech: ["NodeJS", "PostgreSQL", "Redis", "Express"],
    icon: FaGavel,
    feature: "Race Condition Prevention"
  },
  {
    id: 3,
    title: "Modular CRM & Permission Management",
    description: "Designed a modular CRM tailored for custom business workflows.",
    techDescription: "Implemented a detailed, granular Role-Based Access Control (RBAC) system for secure, multi-tenant data access. Focused on multi-tenant data isolation and flexible workflow automation logic for enterprise-grade security.",
    keyFeatures: ["Multi-Tenant Architecture", "Flexible Workflow Automation", "RBAC"],
    tech: ["PHP", "Laravel", "Livewire", "CRM"],
    icon: FaUsersCog,
    feature: "Granular RBAC Logic"
  },
  {
    id: 4,
    title: "Scalable E-Commerce Backend",
    description: "Built the backend infrastructure for a custom e-commerce platform.",
    techDescription: "Integrated third-party APIs for payments, managed massive inventory data, and utilized AWS S3 for secure media handling. Architected the database for fast read/writes during high-traffic sales periods.",
    keyFeatures: ["API Integrations", "Scalable Database Design", "Media Management"],
    tech: ["Laravel", "Docker", "AWSS3", "Ecommerce"],
    icon: FaShoppingCart,
    feature: "Scalable Data Ecosystem"
  }
];

export const experience = [
  {
    period: "2020 - Present (4+ Years)",
    company: "HNH Soft Tech Solutions",
    role: "Senior Backend Developer",
    highlights: [
      "Architecting custom backend solutions for international clients using Laravel and Node.js.",
      "Leading the development of sports-tech and high-concurrency bidding platforms.",
      "Optimizing database performance and implementing robust CI/CD pipelines.",
      "Managing complex system migrations and ensuring 99.9% uptime for enterprise applications."
    ]
  }
];
