export const SITE_CONFIG = {
  name: "yourusername",
  title: "Full-Stack Developer & DevOps Engineer",
  tagline: "Building scalable web apps & automating the cloud.",
  description:
    "Minimalist Dracula-themed portfolio template built with Astro, Tailwind CSS, live Discord presence, Spotify status, and GitHub contribution graphs.",
  email: "your.email@example.com",

  discordId: "123456789012345678", // Replace with your 18-digit Discord User ID
  avatarUrl: "https://github.com/yourusername.png",

  // Firebase Realtime Database Environment Config (Optional: for Spotify playback history)
  firebaseConfig: {
    apiKey:
      import.meta.env.PUBLIC_FIREBASE_API_KEY ||
      "AIzaSyDemoDummyApiKeyForTemplate12345678",
    authDomain:
      import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN ||
      "your-portfolio-demo.firebaseapp.com",
    databaseURL:
      import.meta.env.PUBLIC_FIREBASE_DATABASE_URL ||
      "https://your-portfolio-demo-default-rtdb.firebaseio.com",
    projectId:
      import.meta.env.PUBLIC_FIREBASE_PROJECT_ID || "your-portfolio-demo",
    storageBucket:
      import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET ||
      "your-portfolio-demo.firebasestorage.app",
    messagingSenderId:
      import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "123456789012",
    appId:
      import.meta.env.PUBLIC_FIREBASE_APP_ID ||
      "1:123456789012:web:abcdef1234567890abcdef",
  },

  favoriteSongs: [
    { song: "Starboy", artist: "The Weeknd" },
    { song: "Blinding Lights", artist: "The Weeknd" },
    { song: "Midnight City", artist: "M83" },
    { song: "Get Lucky", artist: "Daft Punk" },
    { song: "Nightcall", artist: "Kavinsky" },
  ],

  readmeInfo: {
    greeting: "Hello there 👋",
    status_ico: "⚡",
    status: "Building awesome open-source projects...",
    focus: "Full-Stack Development & Cloud Architecture",
    cloud: "AWS • Docker • Kubernetes",
    scripting: "TypeScript • Python • Bash",
    vibe: "Coffee, Code & Lofi Beats ☕🎧",
    learning: "Rust & Distributed Systems",
  },

  socials: [
    { name: "GitHub", url: "https://github.com/yourusername" },
    { name: "Twitter / X", url: "https://x.com/yourusername" },
    { name: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
    { name: "DevTo", url: "https://dev.to/yourusername" },
    {
      name: "Spotify",
      url: "https://open.spotify.com/user/yourusername",
    },
  ],

  techStack: [
    {
      name: "TypeScript",
      icon: "https://cdn.simpleicons.org/typescript/3178C6",
    },
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Astro", icon: "https://cdn.simpleicons.org/astro/BC52EE" },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
    {
      name: "Kubernetes",
      icon: "https://cdn.simpleicons.org/kubernetes/326CE5",
    },
    { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
    {
      name: "PostgreSQL",
      icon: "https://cdn.simpleicons.org/postgresql/4169E1",
    },
  ],

  skills: [
    {
      category: "Frontend Development",
      items: [
        "Astro",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Next.js",
        "HTML5 / CSS3",
      ],
    },
    {
      category: "Backend & APIs",
      items: [
        "Node.js",
        "Express",
        "Python",
        "REST APIs",
        "GraphQL",
        "PostgreSQL",
      ],
    },
    {
      category: "DevOps & Cloud",
      items: [
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "AWS Services",
        "CI/CD Pipelines",
        "Linux Administration",
      ],
    },
  ],

  projects: [
    {
      title: "Project Alpha",
      description:
        "A high-performance modern web dashboard built with Astro and Tailwind CSS.",
      tags: ["Astro", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/yourusername/project-alpha",
      demo: "https://project-alpha.example.com",
      openForCollab: true,
    },
    {
      title: "Cloud Microservices Suite",
      description:
        "Scalable distributed microservices architecture template with automated CI/CD pipeline.",
      tags: ["Docker", "Kubernetes", "Node.js"],
      github: "https://github.com/yourusername/cloud-suite",
      openForCollab: true,
    },
    {
      title: "AI Automation Assistant",
      description:
        "Intelligent assistant designed to streamline developer workflows and pull requests.",
      tags: ["Python", "Automation", "DevOps"],
      github: "https://github.com/yourusername/ai-assistant",
      demo: "https://ai-assistant.example.com",
      openForCollab: false,
    },
    {
      title: "Legacy CLI Toolkit",
      description:
        "Cross-platform command-line utility for managing local development environments.",
      tags: ["Bash", "Linux", "Go"],
      github: "https://github.com/yourusername/legacy-toolkit",
      archived: true,
    },
  ],
};
