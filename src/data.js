import { 
  Database, 
  Layout, 
  Server, 
  Mail, 
  Cpu, 
  Cloud 
} from "lucide-react";
import { FaGithub, FaLinkedin, FaNodeJs, FaLaravel, FaPhp } from "react-icons/fa";
import { SiPostgresql, SiMysql, SiDocker, SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si";

export const personalInfo = {
  name: "Umer Mukhtar",
  title: "Backend Developer | Laravel & Node.js Specialist",
  tagline: "Building scalable, high-performance backend systems that power modern digital experiences.",
  email: "umerwell1234@gmail.com",
  socials: {
    github: "https://github.com/umermukhtar",
    linkedin: "https://linkedin.com/in/umermukhtar"
  }
};

export const skills = [
  {
    category: "Backend",
    icon: Server,
    items: ["PHP", "Laravel", "Node.js", "Express"]
  },
  {
    category: "Database",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
  },
  {
    category: "Frontend",
    icon: Layout,
    items: ["JavaScript", "jQuery", "Blade", "Livewire", "React", "Tailwind CSS"]
  },
  {
    category: "DevOps",
    icon: Cloud,
    items: ["Docker", "cPanel", "OVH", "AWS S3", "DigitalOcean"]
  },
  {
    category: "Others",
    icon: Cpu,
    items: ["Git", "WebSockets", "REST APIs", "Real-time systems", "Microservices"]
  }
];

export const projects = [
  {
    id: 1,
    title: "NexTrade Real-time Bidding",
    description: "A high-performance bidding platform with real-time updates and secure payment integration.",
    problem: "Existing platforms had high latency and poor real-time synchronization.",
    solution: "Implemented WebSockets for instant bid updates and a Redis-backed queue system for high concurrency.",
    tech: ["Laravel", "WebSockets", "Redis", "MySQL"],
    feature: "Real-time bid updates with < 100ms latency",
    image: "https://images.unsplash.com/photo-1611974714658-66d2c1300a22?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "EcoConnect CRM",
    description: "Scalable CRM dashboard for managing customer relationships and sales pipelines.",
    problem: "The client needed a centralized system to manage thousands of leads across different regions.",
    solution: "Built a multi-tenant architecture with granular RBAC and automated lead scoring algorithms.",
    tech: ["Node.js", "Express", "PostgreSQL", "React"],
    feature: "Automated lead scoring and reporting dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "LaraStream Video Platform",
    description: "Video streaming and content management system for digital educators.",
    problem: "Standard hosting solutions were too expensive for large-scale video delivery.",
    solution: "Integrated AWS S3 for storage and CloudFront for global delivery, with Laravel-based content management.",
    tech: ["Laravel", "AWS S3", "CloudFront", "Livewire"],
    feature: "Optimized video streaming with HLS support",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "SwiftChat Real-time Messaging",
    description: "Secure, real-time messaging application with end-to-end encryption.",
    problem: "Needed a private communication tool for corporate internal use.",
    solution: "Developed using Node.js and Socket.io with AES-256 encryption for all messages.",
    tech: ["Node.js", "Socket.io", "MongoDB", "React"],
    feature: "E2E Encrypted private and group chats",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=800&auto=format&fit=crop"
  }
];

export const experience = [
  {
    period: "2022 - Present",
    company: "Freelance / Tech Solutions",
    role: "Senior Backend Developer",
    highlights: [
      "Architected real-time systems serving 10k+ concurrent users.",
      "Optimized database queries reducing load times by 40%.",
      "Delivered 15+ high-quality web applications for diverse clients."
    ]
  },
  {
    period: "2020 - 2022",
    company: "Digital Innovations Ltd.",
    role: "Full Stack Developer",
    highlights: [
      "Developed and maintained complex Laravel-based ecommerce platforms.",
      "Integrated 10+ third-party APIs for payment, shipping, and marketing.",
      "Improved deployment efficiency by implementing CI/CD pipelines."
    ]
  }
];
