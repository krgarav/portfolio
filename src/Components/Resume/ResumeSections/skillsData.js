
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaAws,
  FaDocker,
} from "react-icons/fa";

import {
  SiMongodb,
  SiRabbitmq,
  SiRedis,
} from "react-icons/si";

const skillGroups = [
  // =========================
  // FRONTEND
  // =========================
  {
    title: "Frontend Development",
    description: "Building responsive and scalable user interfaces",
    skills: [
      {
        name: "HTML5",
        icon: FaHtml5,
        level: "Advanced",
        experience: "5+ Years",
        color: "#E34F26",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        level: "Advanced",
        experience: "5+ Years",
        color: "#1572B6",
      },
      {
        name: "JavaScript",
        icon: FaJs,
        level: "Advanced",
        experience: "5+ Years",
        color: "#F7DF1E",
      },
      {
        name: "React",
        icon: FaReact,
        level: "Advanced",
        experience: "4+ Years",
        color: "#61DAFB",
      },
    ],
  },

  // =========================
  // UI & STYLING
  // =========================
  {
    title: "UI & Styling",
    description: "Creating clean, responsive and accessible interfaces",
    skills: [
      {
        name: "Bootstrap",
        icon: FaBootstrap,
        level: "Advanced",
        experience: "4+ Years",
        color: "#7952B3",
      },
    ],
  },

  // =========================
  // BACKEND
  // =========================
  {
    title: "Backend Development",
    description: "Developing APIs and scalable server-side applications",
    skills: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        level: "Advanced",
        experience: "4+ Years",
        color: "#339933",
      },
    ],
  },

  // =========================
  // DATABASE
  // =========================
  {
    title: "Database",
    description: "Designing and managing application data",
    skills: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        level: "Intermediate",
        experience: "3+ Years",
        color: "#47A248",
      },
    ],
  },

  // =========================
  // CLOUD & DEVOPS
  // =========================
  {
    title: "Cloud & DevOps",
    description: "Containerization, deployment and cloud infrastructure",
    skills: [
      {
        name: "AWS",
        icon: FaAws,
        level: "Intermediate",
        experience: "3+ Years",
        color: "#FF9900",
      },
      {
        name: "Docker",
        icon: FaDocker,
        level: "Intermediate",
        experience: "3+ Years",
        color: "#2496ED",
      },
    ],
  },

  // =========================
  // MESSAGING & QUEUES
  // =========================
  {
    title: "Messaging & Queues",
    description: "Building asynchronous and event-driven workflows",
    skills: [
      {
        name: "RabbitMQ",
        icon: SiRabbitmq,
        level: "Intermediate",
        experience: "2+ Years",
        color: "#FF6600",
      },
      {
        name: "Redis",
        icon: SiRedis,
        level: "Intermediate",
        experience: "2+ Years",
        color: "#DC382D",
      },
      {
        name: "BullMQ",
        icon: SiRedis,
        level: "Intermediate",
        experience: "2+ Years",
        color: "#DC382D",
      },
    ],
  },
];

export default skillGroups;

