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
  BarChart3
} from "lucide-react";
import { FaGithub, FaLinkedin, FaNodeJs, FaLaravel, FaPhp, FaAws } from "react-icons/fa";
import { SiPostgresql, SiMysql, SiDocker, SiTailwindcss, SiJavascript, SiTypescript, SiRedis, SiSocketdotio } from "react-icons/si";

export const personalInfo = {
  name: "Umer Mukhtar",
  title: "Senior Backend Engineer | System Architect",
  subtitle: "Architecting scalable backend systems, complex API logic, and high-concurrency real-time engines.",
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
    title: "Live Bidding Engine",
    description: "A high-performance auction platform with real-time bid synchronization and secure processing.",
    problem: "High latency in bid updates caused synchronization issues and user frustration during live events.",
    solution: "Architected a WebSocket-driven event system with Laravel and Redis to handle thousands of concurrent bids with sub-100ms latency.",
    tech: ["Laravel", "WebSockets", "Redis", "MySQL"],
    feature: "Real-time bid updates",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Scalable Ecommerce Backend",
    description: "Multi-tenant ecommerce architecture designed for high volume transactions and inventory management.",
    problem: "Existing monolithic systems struggled with peak traffic during sales and complex multi-vendor inventory.",
    solution: "Developed a modular Laravel backend with horizontal scaling capabilities and an optimized database schema for fast read/writes.",
    tech: ["Laravel", "PostgreSQL", "Elasticsearch", "Docker"],
    feature: "Handles 10k+ daily transactions",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Real-time Chat Infrastructure",
    description: "A secure, enterprise-grade messaging system for internal corporate communication.",
    problem: "The client needed a private, self-hosted communication tool that guaranteed data sovereignty and encryption.",
    solution: "Built using Node.js and Socket.io with end-to-end encryption and custom authentication layers.",
    tech: ["Node.js", "Socket.io", "Express", "MongoDB"],
    feature: "E2E Encrypted messaging",
    icon: MessageSquare,
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Intelligent Notification System",
    description: "Centralized notification hub managing emails, push alerts, and SMS for millions of users.",
    problem: "Fragmented notification logic across services led to delays and inconsistent user experiences.",
    solution: "Created a dedicated Node.js microservice that manages all outgoing communications with fallback logic and delivery tracking.",
    tech: ["Node.js", "Redis", "Kafka", "AWS SES"],
    feature: "Automated delivery failover",
    icon: Bell,
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "CRM Dashboard System",
    description: "Data-rich administrative dashboard for sales pipeline tracking and customer analytics.",
    problem: "Sales teams were overwhelmed by raw data and lacked clear visual insights into their pipelines.",
    solution: "Developed a comprehensive CRM with complex data aggregation and real-time sales metrics visualization.",
    tech: ["Laravel", "Livewire", "Chart.js", "MySQL"],
    feature: "Automated lead scoring",
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  }
];

export const experience = [
  {
    period: "2022 - Present",
    company: "Freelance Technical Consultant",
    role: "Senior Backend Developer",
    highlights: [
      "Built multiple custom real-time systems for international clients, serving 50k+ daily active users.",
      "Developed a high-frequency bidding system reducing latency from 2s to < 100ms.",
      "Improved server performance by 40% through database optimization and Redis caching strategies."
    ]
  },
  {
    period: "2020 - 2022",
    company: "CoreTech Solutions",
    role: "Full Stack Developer",
    highlights: [
      "Architected and delivered 10+ scalable ecommerce and CRM systems using Laravel.",
      "Integrated complex payment gateways and third-party APIs with 99.9% reliability.",
      "Mentored junior developers and implemented standardized code review processes."
    ]
  }
];
