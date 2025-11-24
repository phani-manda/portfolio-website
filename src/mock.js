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
    linkedin: "https://www.linkedin.com/in/phani-manda-667a002a5/",
    github: "https://github.com/phani-manda",
  },

  about: {
    intro: "I'm a passionate Computer Science student with a strong foundation in algorithms, data structures, and full-stack development. My goal is to join a leading tech company where I can contribute to innovative projects and grow as a software engineer.",
    highlights: [
      "7.2 GPA in Computer Science",
      "Active contributor to open-source projects",
      "Strong problem-solving skills",
      "Team collaboration experience"
    ],
    education: {
      degree: "Bachelor of Science in Computer Science",
      university: "CMR College of Engineering and Technology, kadlakoya",
      graduation: "Expected May 2027",
      coursework: ["Data Structures & Algorithms", "Artificial Intelligence", "Database Systems", "Computer Networks", "Software Engineering", "Machine Learning", "Operating Systems"]
    }
  },

  skills: {
    languages: ["Python", "JavaScript", "C/C++", "SQL"],
    frontend: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Node.js", "Express", "FastAPI", "Django"],
    databases: ["MongoDB", "MySQL"],
    tools: ["Git", "Docker", "SupaBase", "Firebase", "Vercel", "Postman"],
    concepts: ["Data Structures", "Algorithms", "RESTful APIs"]
  },

  projects: [
    {
      id: 1,
      title: "ChatX - A Real-Time Chat Application",
      category: "Web",
      description: "A real time chat application using web sockets for instant communication between users. supports one on one and group chats.",
      tech: ["React", "Node.js", "Express", "Socket.io", "MongoDB"],
      features: ["one on one chat", "group chat", "real time communication", "user authentication", "file sharing", "clean flexible UI"],
      github: "https://github.com/phani-manda/chatX",
      live: "https://chatx-zydfu.sevalla.app/",
      // Use a web-friendly path (public folder root) to avoid backslash escapes
      image: "/image.jpg"
    },

    {
      id: 2,
      title: "Resumo - AI powered resume optimizer",
      category: "AI",
      description: "An Open Source AI based resume optimizer with keywords generation based on job description with personalized AI chat bot.",
      tech: ["React", "Node.js", "Express", "Gemini API", "PostgreSQL", "Prisma", "Vercel", "Render", "Tailwind CSS"],
      features: ["AI powered resume optimizer", "Keywords generation based on job description", "Personalized AI chat bot"],
      github: "https://github.com/phani-manda/resumo-ATS",
      live: "https://resumo-ats.vercel.app/",
      // Use a web-friendly path (public folder root) to avoid backslash escapes
      image: "/resumo.png"
    }
  ],

  upcomingProjects: [
    {
      description: "coming soon"
    }
  ],

  experience: [
    {
      title: "Fresher",
      company: "Currently seeking opportunities",
      period: "2025",
      description: "Actively looking for internship and entry-level positions in software development. Eager to apply my skills in real-world projects and contribute to innovative teams.",
      achievements: ["Strong foundation in full-stack development", "Active learner with hands-on project experience", "Ready to contribute and grow"]
    }
  ]
};