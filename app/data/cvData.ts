export interface CVData {
  name: string;
  location: string;
  linkedin: string;
  github: string;
  email: string;
  summary: string;
  skills: {
    programming: string[];
    technologies: string[];
  };
  experience: Experience[];
  education: Education[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export const data: CVData = {
  name: "Satrio Adi Prakoso",
  location: "Jakarta, Indonesia",
  linkedin: "https://www.linkedin.com/in/satrioadip/",
  github: "https://github.com/caffeinjunkie",
  email: "dev.satrio.ap@gmail.com",
  summary:
    "Passionate Software Engineer with over 6 years of experience specializing in Next.js, React, and TypeScript. Focuses on the intersection of web performance and business growth by engineering SEO-friendly applications to boost user retention and conversion.",
  skills: {
    programming: ["TypeScript", "JavaScript", "Rust"],
    technologies: [
      "Next.js",
      "React",
      "Vite",
      "Tauri Desktop",
      "Redux",
      "Git",
      "SWR",
      "Cypress",
      "React Testing Library",
      "Jest",
      "Tailwind",
      "Framer Motion",
      "Supabase",
      "Web Socket",
      "Storybook",
    ],
  },
  experience: [
    {
      title: "Frontend Developer",
      company: "PT Ajaib Teknologi Indonesia",
      location: "Jakarta, Indonesia",
      period: "Sep 2025 – Present",
      achievements: [
        "Developed high-performance, mobile-first product pages using SSR/SSG strategies",
        "Achieved a 93% reduction in TBT and a 57% score improvement in Web Vitals",
        "Architected a cross-domain SSO and registration platform that improved conversion rates",
        "Engineered a high-performance desktop trading client using Tauri and WebSockets",
      ],
    },
    {
      title: "Software Developer (Freelance)",
      company: "pekerja.ai",
      location: "Remote",
      period: "Jan 2025 – Aug 2025",
      achievements: [
        "Built a citizen reporting platform using Next.js, Tailwind CSS, and Supabase",
        "Integrated AI tools to improve report submission quality",
        "Developed a task management dashboard that reduced resolution time by 20%",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Codebay Solutions Sl.",
      location: "Barcelona, Spain",
      period: "Mar 2023 – Jun 2024",
      achievements: [
        "Redesigned checkout infrastructure for better SEO and accessibility, increasing booking conversions",
        "Created reusable React components, boosting development velocity by 40%",
        "Implemented internationalization using Lokalise",
      ],
    },
    {
      title: "Full Stack Engineer",
      company: "Bank SMBC (formerly Bank BTPN)",
      location: "Jakarta, Indonesia",
      period: "Apr 2019 – Feb 2023",
      achievements: [
        "Designed and developed Touchbiz, a digital banking app for SMEs",
        "Successfully converted 50% of the traditional business banking user base shortly after release",
        "Streamlined multiple registration pipelines into a unified system",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Informatics in Informatics Engineering",
      institution: "Duta Wacana Christian University",
      location: "Yogyakarta, Indonesia",
      period: "2014 – 2018",
    },
  ],
};
