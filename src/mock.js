// Mock data for CS student portfolio

export const portfolioData = {
  personal: {
    name: "Phani Manda",
    title: "Computer Science Student",
    subtitle: "Aspiring Software Engineer | Full-Stack Developer",
    description: "CS undergrad passionate about building scalable software solutions and solving complex problems. Seeking SDE internship opportunities at top tech companies.",
    email: "phanimanda8@gmail.com",
    phone: "+91 7075680805",
    location: "Hyderabad, Telangana, India",
    resume: "/resume.pdf",
    linkedin: "https://linkedin.com/in/alexchen",
    github: "https://github.com/alexchen",
    portfolio: "https://alexchen.dev"
  },

  about: {
    intro: "I'm a passionate Computer Science student at UC Berkeley with a strong foundation in algorithms, data structures, and full-stack development. My goal is to join a leading tech company where I can contribute to innovative projects and grow as a software engineer.",
    highlights: [
      "3.8 GPA in Computer Science",
      "5+ personal projects deployed to production",
      "Active contributor to open-source projects",
      "Leadership experience in university tech clubs"
    ],
    education: {
      degree: "Bachelor of Science in Computer Science",
      university: "University of California, Berkeley",
      graduation: "Expected May 2025",
      coursework: ["Data Structures & Algorithms", "Database Systems", "Computer Networks", "Software Engineering", "Machine Learning", "Operating Systems"]
    }
  },

  skills: {
    languages: ["Java", "Python", "JavaScript", "TypeScript", "C++", "SQL"],
    frontend: ["React", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Node.js", "Express", "FastAPI", "Spring Boot", "Django"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    tools: ["Git", "Docker", "AWS", "Firebase", "Vercel", "Postman"],
    concepts: ["Data Structures", "Algorithms", "System Design", "RESTful APIs", "Microservices", "Agile Development"]
  },

  projects: [
    {
      id: 1,
      title: "EcoTracker",
      description: "A full-stack web application that helps users track their carbon footprint with real-time analytics and personalized recommendations.",
      tech: ["React", "Node.js", "PostgreSQL", "Chart.js", "AWS"],
      features: ["User authentication", "Real-time data visualization", "Social sharing", "Gamification"],
      github: "https://github.com/alexchen/ecotracker",
      live: "https://ecotracker.vercel.app",
      image: "https://images.unsplash.com/photo-1569163139394-de44cb244a2d?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "AlgoVisualizer", 
      description: "Interactive algorithm visualization tool built with React. Helps students understand sorting and pathfinding algorithms through animations.",
      tech: ["React", "TypeScript", "Canvas API", "Framer Motion"],
      features: ["Multiple sorting algorithms", "Pathfinding visualization", "Speed controls", "Step-by-step execution"],
      github: "https://github.com/alexchen/algovisualizer",
      live: "https://algovisualizer.netlify.app",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "StudyBuddy",
      description: "Mobile-first study group matching platform that connects students based on courses, study preferences, and academic goals.",
      tech: ["React Native", "Firebase", "Node.js", "Express"],
      features: ["Smart matching algorithm", "Real-time chat", "Study session scheduling", "Progress tracking"],
      github: "https://github.com/alexchen/studybuddy",
      live: "https://studybuddy-app.com",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
    }
  ],

  upcomingProjects: [
    {
      id: 1,
      title: "AI Code Review Assistant",
      description: "Machine learning powered tool to automatically review code and suggest improvements. Currently in research phase.",
      tech: ["Python", "TensorFlow", "NLP", "GitHub API"],
      status: "In Development",
      timeline: "Q2 2025"
    },
    {
      id: 2,
      title: "Distributed Chat System",
      description: "Scalable real-time chat application using microservices architecture and WebSocket connections.",
      tech: ["Go", "Redis", "Docker", "Kubernetes"],
      status: "Planning",
      timeline: "Q3 2025"
    }
  ],

  experience: [
    {
      title: "Software Engineering Intern",
      company: "TechStart Inc.",
      period: "Jun 2024 - Aug 2024",
      description: "Developed and maintained React components for the company's main web application. Improved page load times by 30% through code optimization.",
      achievements: ["Reduced bundle size by 25%", "Implemented automated testing", "Collaborated with senior developers"]
    }
  ]
};