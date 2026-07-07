export interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: Array<{ name: string }>;
  image: string;
  live: string;
  github: string;
}

export const portfolioContext = {
  personal: {
    name: "Arham Ali",
    role: "Frontend Engineer & Full Stack Developer",
    email: "arhamali.dev@gmail.com",
    phone: "+923211051323",
    location: "W2 Global",
    portfolio: "https://arham-pro-portfolio.vercel.app",
    github: "https://github.com/arham-ali1323",
    linkedin: "https://www.linkedin.com/in/arham-ali-973359289/",
    whatsapp: "https://wa.me/+923211051323",
  },
  skills: {
    frontend: [
      "React 19",
      "Next.js 14/15",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "Shadcn UI",
      "React Icons",
    ],
    backend: [
      "Node.js",
      "Express",
      "API Development",
      "Server Actions",
    ],
    tools: [
      "Git",
      "GitHub",
      "Vercel",
      "VS Code",
      "Postman",
      "Netlify",
    ],
    other: [
      "Responsive Design",
      "UI/UX Design",
      "Performance Optimization",
      "SEO",
    ],
  },
  services: [
    {
      name: "Frontend Development",
      description: "Building modern, responsive web applications with React and Next.js",
    },
    {
      name: "Full Stack Development",
      description: "End-to-end web application development with database integration",
    },
    {
      name: "E-Commerce Solutions",
      description: "Custom e-commerce platforms with payment integration",
    },
    {
      name: "Portfolio Websites",
      description: "Professional portfolio sites for developers and businesses",
    },
  ],
  projects: [
    {
      num: "01",
      category: "E-Commerce",
      title: "ShopHub",
      description:
        "A modern e-commerce platform with sleek design and seamless shopping experience, featuring product listings, cart management, and secure checkout.",
      stack: [
        { name: "React 19" },
        { name: "Next.js 15" },
        { name: "TypeScript" },
        { name: "TailwindCSS" },
        { name: "Shadcn UI" },
        { name: "Framer Motion" },
      ],
      image: "/asset/ShopHub.png",
      live: "https://shop-hub-demo.vercel.app/",
      github: "https://github.com/arham-ali1323/shop-hub",
    },
    {
      num: "02",
      category: "Travel & Booking",
      title: "CarRental Pro",
      description:
        "A comprehensive car rental booking platform with vehicle search, availability checking, and reservation management system.",
      stack: [
        { name: "React 19" },
        { name: "Next.js 15" },
        { name: "TypeScript" },
        { name: "TailwindCSS" },
        { name: "React Hook Form" },
        { name: "Zustand" },
      ],
      image: "/asset/CarRental.png",
      live: "https://car-rental-pro.vercel.app/",
      github: "https://github.com/arham-ali1323/car-rental-pro",
    },
    {
      num: "03",
      category: "Portfolio",
      title: "Personal Portfolio",
      description:
        "Professional portfolio website showcasing personal projects, skills, and experience with modern design and smooth animations.",
      stack: [
        { name: "React 19" },
        { name: "Next.js" },
        { name: "TypeScript" },
        { name: "TailwindCSS" },
        { name: "Framer Motion" },
        { name: "React Icons" },
      ],
      image: "/asset/portofolio.png",
      live: "https://arham-pro-portfolio.vercel.app/",
      github: "https://github.com/arham-ali1323/personal-portfolio",
    },
    {
      num: "04",
      category: "German Fitness",
      title: "Gym Manager",
      description:
        "A comprehensive fitness and gym management platform with workout tracking, class scheduling, and membership management.",
      stack: [
        { name: "React 19" },
        { name: "Next.js" },
        { name: "TypeScript" },
        { name: "TailwindCSS" },
        { name: "Chart.js" },
        { name: "React Query" },
      ],
      image: "/asset/Gym &.png",
      live: "https://german-fitness-sp.vercel.app/",
      github: "https://github.com/arham-ali1323/fitlife-manager",
    },
    {
      num: "05",
      category: "Business Management",
      title: "AlphaSoft 360",
      description:
        "A versatile business management solution for companies, featuring CRM, project tracking, and team collaboration tools.",
      stack: [
        { name: "React 19" },
        { name: "Next.js" },
        { name: "TypeScript" },
        { name: "TailwindCSS" },
        { name: "React DnD" },
        { name: "Date-fns" },
      ],
      image: "/asset/AlphaSoft360.png",
      live: "https://alphasoft-360.vercel.app/",
      github: "https://github.com/arham-ali1323/alphasoft-360",
    },
  ],
};
