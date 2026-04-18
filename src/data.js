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
  title: "Backend Engineer | Laravel & Node.js Specialist",
  subtitle: "I build scalable backend systems, real-time applications, and high-performance web platforms.",
  impactLine: "4+ years experience in PHP (Laravel) and 2+ years in Node.js",
  email: "umerwell1234@gmail.com",
  socials: {
    github: "https://github.com/umermuk",
    linkedin: "https://www.linkedin.com/in/umer-mukhtar-521b69275"
  }
};

export const aboutContent = {
  paragraphs: [
    "With over 4 years of expertise in PHP Laravel and 2+ years in Node.js, I specialize in architecting robust backend systems that prioritize performance, scalability, and clean code. My approach is centered on building secure and efficient server-side architectures that solve complex business problems while ensuring a seamless developer and user experience.",
    "I have a proven track record in developing high-concurrency real-time systems, sophisticated CRM dashboards, and large-scale ecommerce platforms. My focus is always on implementing best practices in architecture, from database optimization to microservices, ensuring that systems can grow and evolve without technical debt.",
    "I am deeply committed to performance tuning and security, leveraging tools like Redis and WebSockets to deliver lightning-fast, interactive experiences. Whether it's a real-time bidding engine or a notification system, I thrive on the technical challenges that come with modern web engineering."
  ]
};

export const skills = [
  {
    category: "Backend",
    icon: Server,
    items: [
      { name: "PHP", icon: FaPhp, highlight: true },
      { name: "Laravel", icon: FaLaravel, highlight: true },
      { name: "Node.js", icon: FaNodeJs, highlight: true },
      { name: "Express", icon: null }
    ]
  },
  {
    category: "Database",
    icon: Database,
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Redis", icon: SiRedis, highlight: true },
      { name: "MongoDB", icon: null }
    ]
  },
  {
    category: "Real-time & Services",
    icon: Zap,
    items: [
      { name: "WebSockets", icon: SiSocketdotio, highlight: true },
      { name: "Socket.io", icon: SiSocketdotio },
      { name: "Pusher", icon: null },
      { name: "Microservices", icon: Cpu }
    ]
  },
  {
    category: "DevOps",
    icon: Cloud,
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "AWS S3", icon: FaAws },
      { name: "CI/CD", icon: null },
      { name: "cPanel/OVH", icon: null }
    ]
  },
  {
    category: "Frontend & Tools",
    icon: Layout,
    items: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Git", icon: null },
      { name: "REST APIs", icon: null }
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
