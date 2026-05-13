import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Gauge,
  Layers3,
  Workflow,
} from "lucide-react";

export type ProjectItem = {
  name: string;
  repoName: string;
  repoUrl: string;
  category: string;
  summary: string;
  impact: string;
  stack: string[];
  language?: string | null;
  stars?: number;
};

export type SpecializationItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const portfolioData = {
  name: "Jabir Imteyaz",
  role: "Computer Science Undergraduate • React, JavaScript, Java & DSA",
  headline:
    "Building scalable UI systems with React, JavaScript, Java, and DSA-driven problem solving.",
  summary:
    "I am a fresher Computer Science undergraduate who enjoys turning product ideas into polished interfaces, building responsive web experiences, integrating APIs, and applying Java plus DSA fundamentals to solve problems with clarity and structure.",
  profileTitle:
    "B.Tech Computer Science undergraduate focused on premium frontend execution and strong Java plus DSA fundamentals.",
  profileBio:
    "React and JavaScript specialist with internship experience in frontend optimization, reusable UI systems, REST API integration, and compact product-focused interfaces. I care about performance, responsive design, and clean developer-facing execution.",
  email: "jabirimteyaz123@gmail.com",
  linkedin: "https://linkedin.com/in/jabir-imteyaz",
  github: "https://github.com/Jabir-05",
  githubUsername: "Jabir-05",
  resumePath: "/Jabir_Imteyaz_Resume .pdf",
  location: "India",
  techStack: [
    "React",
    "JavaScript",
    "Java",
    "DSA",
    "REST APIs",
    "Node.js",
    "Express.js",
    "MySQL",
    "Responsive Design"
  ],
  skillTags: [
    "Frontend Developer",
    "React & JavaScript Specialist",
    "Java + DSA",
    "Open to opportunities"
  ],
  specializations: [
    {
      icon: Code2,
      title: "Building scalable UI systems",
      description:
        "Reusable component thinking with responsive layouts, strong spacing discipline, and clean interaction patterns."
    },
    {
      icon: Workflow,
      title: "API Integration",
      description:
        "Comfortable connecting frontend flows with REST APIs, auth-aware UI, and practical product logic."
    },
    {
      icon: Gauge,
      title: "Performance Optimization",
      description:
        "Focused on reducing unnecessary renders, improving perceived speed, and keeping interfaces efficient."
    },
    {
      icon: Layers3,
      title: "Responsive Design",
      description:
        "Layouts that adapt cleanly across mobile, tablet, and desktop without awkward spacing or dead zones."
    }
  ] satisfies SpecializationItem[],
  heroHighlights: [
    {
      value: "30%",
      label: "faster UI delivery",
      detail: "Improved interface load time during internship frontend optimization work."
    },
    {
      value: "20%",
      label: "fewer re-renders",
      detail: "Reduced unnecessary state-driven updates while integrating REST-based flows."
    },
    {
      value: "Java + DSA",
      label: "problem-solving base",
      detail: "Strong core in data structures, algorithms, OOP, and practical logic building."
    }
  ],
  quickSpecialization: [
    {
      title: "Current role",
      value: "Frontend developer in the making with CS depth"
    },
    {
      title: "Location",
      value: "Based in India"
    },
    {
      title: "Availability",
      value: "Open to internships and full-time opportunities"
    },
    {
      title: "Known for",
      value: "React interfaces plus Java and DSA problem solving"
    }
  ],
  experienceSummary: [
    {
      title: "Scalable UI systems",
      value: "Reusable component work, layout refinement, and cleaner frontend composition."
    },
    {
      title: "API Integration",
      value: "Connected React interfaces with REST APIs and optimized state handling patterns."
    }
  ],
  metricHighlights: [
    {
      icon: "repositories",
      value: "28+",
      label: "Repositories",
      detail:
        "Built across React apps, APIs, dashboards, UI clones, utilities, and research-led experiments."
    },
    {
      icon: "categories",
      value: "6",
      label: "Project categories",
      detail:
        "E-commerce, collaboration tools, explainable AI, CRUD utilities, UI clones, and interface builds."
    },
    {
      icon: "performance",
      value: "30%",
      label: "Faster UI",
      detail:
        "Measured improvement during internship work through cleaner rendering and stronger frontend structure."
    },
    {
      icon: "dsa",
      value: "Java + DSA",
      label: "Problem solving",
      detail:
        "Strong fundamentals in algorithms, OOP, DBMS, and systems concepts that support real implementation work."
    }
  ] as const,
  about:
    "My work sits at the intersection of frontend polish and engineering discipline. I enjoy building compact, modern interfaces that feel intentional, while using JavaScript, React, Java, and DSA knowledge to keep the underlying logic clean and dependable.",
  coreStrengths: [
    {
      title: "Frontend execution",
      description:
        "Responsive layouts, modern UI composition, better information hierarchy, and thoughtful spacing systems."
    },
    {
      title: "Engineering mindset",
      description:
        "Java plus DSA fundamentals help me structure features clearly and reason through implementation tradeoffs."
    },
    {
      title: "Product awareness",
      description:
        "I pay attention to usability, density, clarity, and how a screen should guide attention without clutter."
    },
    {
      title: "Growth mode",
      description:
        "As a fresher, I focus on learning fast, shipping carefully, and improving through real projects and internships."
    }
  ],
  currentFocus: [
    {
      title: "Compact premium interfaces",
      description:
        "Building denser layouts with strong hierarchy, cleaner grid balance, and better card composition."
    },
    {
      title: "Java and DSA depth",
      description:
        "Sharpening problem solving and implementation confidence through data structures and algorithmic thinking."
    },
    {
      title: "Real-world frontend systems",
      description:
        "Improving API integration patterns, reusable UI architecture, and smoother performance in React apps."
    }
  ],
  experience: [
    {
      company: "JKC Software LLP",
      title: "Web Development Intern, Frontend",
      period: "May 2025 - July 2025",
      summary:
        "Worked on React-based frontend improvements with a focus on responsiveness, API integration, and code consistency inside an Agile team setup.",
      points: [
        "Enhanced responsive frontend applications with React and improved UI load time by 30%.",
        "Built reusable UI components that increased development efficiency and consistency across screens.",
        "Integrated REST APIs and optimized state handling to reduce unnecessary re-renders by 20%.",
        "Collaborated with teammates in an Agile workflow and contributed to on-time sprint delivery."
      ]
    },
    {
      company: "Corizo",
      title: "Web Development Intern",
      period: "Training / Internship",
      summary:
        "Built practical full-stack application flows while learning how frontend, backend, and data operations connect in real product work.",
      points: [
        "Built web applications using HTML, CSS, JavaScript, Node.js, and SQL.",
        "Implemented authentication and CRUD functionality for hands-on full-stack practice."
      ]
    }
  ],
  education: {
    school: "Amity University",
    degree: "Bachelor of Technology in Computer Science",
    period: "2022 - 2026",
    cgpa: "7.5",
    note:
      "Academic foundation includes DSA, OOP, DBMS, computer networks, and operating systems, supporting both frontend work and broader engineering understanding."
  },
  educationHighlights: [
    "Strong interest in Java, data structures, and algorithm-driven problem solving.",
    "Comfortable moving between UI execution, API usage, and structured implementation logic.",
    "Focused on learning through internships, portfolio projects, and practical experimentation."
  ],
  tools: ["Git", "Postman", "Figma", "VS Code", "MySQL", "Node.js", "Express.js"],
  learningAreas: [
    "Improving product-style dashboard composition and dense information design.",
    "Sharpening Java plus DSA patterns for cleaner problem solving under constraints.",
    "Exploring stronger frontend motion systems with practical, minimal animation."
  ],
  githubFallback: {
    repos: 28,
    followers: 6,
    stars: 9,
    bio: "Developer building product-style interfaces, practical systems, and learning through consistent project work."
  },
  projects: [
    {
      name: "E-Commerce Website",
      repoName: "E-Commerce-",
      repoUrl: "https://github.com/Jabir-05/E-Commerce-",
      category: "Full Stack Commerce",
      summary:
        "A MERN-based commerce build with user and admin flows, shopping cart behavior, and a structure designed around practical product use cases.",
      impact:
        "Shows my ability to think beyond static screens and handle role-based flows, product browsing, and end-to-end application logic.",
      stack: ["MERN Stack", "Shopping Cart", "Role-based UI", "REST APIs"]
    },
    {
      name: "Team Task Manager",
      repoName: "team-task-manager",
      repoUrl: "https://github.com/Jabir-05/team-task-manager",
      category: "Collaboration Workflow",
      summary:
        "A task management experience designed around assigning work, tracking progress, and keeping team activity visible through a structured dashboard workflow.",
      impact:
        "Highlights collaboration-focused product thinking, dashboard composition, and clearer organization of tasks, ownership, and status.",
      stack: ["Task Workflow", "Dashboard UI", "Team Collaboration", "Product Thinking"]
    },
    {
      name: "XAI Diabetes Detection",
      repoName: "xai-diabetes-detection",
      repoUrl: "https://github.com/Jabir-05/xai-diabetes-detection",
      category: "Explainable AI",
      summary:
        "A diabetes prediction system that combines machine learning with explainable AI techniques to make model output easier to interpret and trust.",
      impact:
        "Demonstrates interest in practical AI applications where transparency matters, especially in health-related prediction use cases.",
      stack: ["Machine Learning", "Explainable AI", "Healthcare Data", "Interpretability"]
    },
    {
      name: "Amazon Frontend Clone",
      repoName: "Amazon-clone-using-HTML-and-CSS",
      repoUrl: "https://github.com/Jabir-05/Amazon-clone-using-HTML-and-CSS",
      category: "UI Clone",
      summary:
        "A responsive Amazon-inspired interface built to strengthen layout replication, spacing accuracy, and visual consistency with core frontend tools.",
      impact:
        "Shows attention to UI fidelity, responsive behavior, and the patience needed to recreate complex multi-section interfaces well.",
      stack: ["HTML", "CSS", "Responsive Layout", "UI Precision"]
    },
    {
      name: "CRUD Web Application",
      repoName: "CRUD-APPLICATION",
      repoUrl: "https://github.com/Jabir-05/CRUD-APPLICATION",
      category: "Frontend Utility",
      summary:
        "A JavaScript CRUD application using localStorage for persistence and a clean flow across create, read, update, and delete interactions.",
      impact:
        "Represents practical frontend logic, form handling, and stateful user interactions without relying on a heavy framework.",
      stack: ["JavaScript", "localStorage", "Form Logic", "Client-side UX"]
    },
    {
      name: "Restaurant Website Interface",
      repoName: "Restaurant-inetrface-using-HTML-and-CSS",
      repoUrl: "https://github.com/Jabir-05/Restaurant-inetrface-using-HTML-and-CSS",
      category: "Marketing Interface",
      summary:
        "A responsive restaurant interface focused on visual hierarchy, section pacing, and small interaction details using fundamental frontend technologies.",
      impact:
        "Shows that I can build clean landing-style interfaces with stronger storytelling, structure, and presentation quality.",
      stack: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    }
  ] satisfies ProjectItem[],
  research: [
    {
      title: "Nature's Filter: Inspired by the Flamingo's Beak",
      summary:
        "A biomimicry-inspired filtration concept exploring how natural structures can inform more efficient filtering approaches."
    },
    {
      title: "Explainable AI for Diabetes Prediction",
      summary:
        "A research idea centered on interpretable machine learning, using XAI techniques to understand key health features and improve trust in predictive healthcare systems."
    }
  ],
  contactSummary:
    "I am actively looking for opportunities where I can contribute as a fresher, keep learning fast, and bring strong frontend execution together with Java plus DSA fundamentals."
};
