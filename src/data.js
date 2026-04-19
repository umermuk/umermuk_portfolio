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

export const projects = [
  {
    id: 1,
    title: "Multi-Sport Scoring Engine",
    description: "Real-time logic for Padel, Futsal, and Cricket using complex state machines.",
    breakdown: "Architected a high-concurrency scoring engine that manages complex match states across different sports. Implemented WebSocket-based synchronization for sub-100ms score updates to thousands of users.",
    tech: ["Laravel", "WebSockets", "Redis", "MySQL"],
    feature: "Complex State Management",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Enterprise Bidding System",
    description: "High-concurrency handling and automated winner selection.",
    breakdown: "Developed a robust bidding system capable of handling thousands of bids per second. Engineered an automated auction closure and winner selection logic with transaction safety and data integrity.",
    tech: ["Laravel", "Redis", "MySQL", "Socket.io"],
    feature: "High-Concurrency Processing",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Custom CRM & RBAC",
    description: "Multi-tenant data isolation and granular permission matrices.",
    breakdown: "Built a sophisticated CRM system with multi-tenancy and a deep RBAC (Role-Based Access Control) system. Ensured strict data isolation and implemented complex permission matrices for enterprise-grade security.",
    tech: ["Laravel", "PostgreSQL", "Docker", "Nginx"],
    feature: "Enterprise Security Architecture",
    icon: Database,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "E-commerce Backend",
    description: "Inventory management, API integrations, and S3 bucket for media.",
    breakdown: "Engineered a scalable ecommerce infrastructure with complex inventory management logic. Integrated third-party logistics and payment APIs, and leveraged AWS S3 for secure, high-availability media storage.",
    tech: ["Node.js", "Express", "AWS S3", "MongoDB"],
    feature: "Scalable API Ecosystem",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=800&auto=format&fit=crop"
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
