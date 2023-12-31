// import {

// } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Charchit Bansal",
  initials: "CB",
  location: "Pisa, Italy",
  locationLink: "https://www.google.com/maps/place/Pisa",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/47504288?s=400&v=4",
  personalWebsiteUrl: "https://charchitbansal.com",
  contact: {
    email: "charchit95@gmail.com",
    tel: "+39 3511276671",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/charchit95",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/charchit-bansal/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/charchit95",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Pisa, Pisa, Italy",
      degree: "Masters in Computer Science",
      start: "2023",
      end: "2025",
    },
    {
      school: "Maharaja Surajmal Institute, New Delhi, India",
      degree: "Bachelors in Computer Application",
      start: "2019",
      end: "2022",
    }
  ],
  work: [
    {
      company: "Directorate of Education, GNCT, Delhi, India",
      link: "https://www.edudel.nic.in/",
      badges: [],
      title: "Software Developer",
      start: "Feb 2022",
      end: "Feb 2023",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Interview Kickstart",
      link: "https://www.interviewkickstart.com/",
      badges: ["Remote"],
      title: "Frontend Developer",
      start: "Jan 2022",
      end: "April 2022",
      description:
        "Provide L1 support and was invilved in revamp of the platform from dJango to NextJs.",
    },
    {
      company: "Nexgen IOT Solutions",
      link: "https://nexgeniots.com/",
      badges: [],
      title: "Frontend Developer",
      start: "April 2021",
      end: "April 2022",
      description: "Frontend Developer - Worked on ReactJs",
    },
    {
      company: "Nexgen IOT Solutions",
      link: "https://nexgeniots.com/",
      badges: ["Remote"],
      title: "Internship Trainee",
      start: "Jan 2021",
      end: "March 2021",
      description: "Internship Trainee - Worked on ReactJs",
    },
    {
      company: "Virtually Testing Foundation",
      link: "https://vt.foundation/",
      badges: ["Remote"],
      title: "Penetration Testing Intern",
      start: "Oct 2021",
      end: "Nov 2021",
      description: "Penetration Testing Intern",
    },
    {
      company: "Hackveda Limited",
      link: "https://hackveda.in/",
      badges: [],
      title: "Full Stack Developer",
      start: "Jan 2021",
      end: "March 2021",
      description: "Full Stack Developer",
    },
    {
      company: "Hackveda Limited",
      link: "https://hackveda.in/",
      badges: ["Remote"],
      title: "Cyber Security Analyst Intern",
      start: "Sep 2020",
      end: "Dec 2020",
      description: "Cyber Security Analyst Intern",
    },
  ],
  skills: [
    "ReactJs",
    "NextJs",
    "NodeJs",
    "Redux",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "WebRTC",
    "Sockets",
    "Python",
    "dJango",
    "Digital Marketing",
    "SEO",
    "SEM",
    "Wordpress",
    "MySQL",
    "MongoDB",
    "AWS",
    "GCP",
  ],
  projects: [
    {
      title: "Qantily",
      techStack: [
        "ReactJs",
        "Redux",
        "Saga",
        "SASS",
        "NodeJS",
        "AWS",
      ],
      description: "Crowd Sourced Testing Platform for Testers. Associated with Nexgen IOT Solutions",
      link: {
        label: "My GPT",
        href: "https://qantily.com/",
      },
    },
    {
      title: "My Drive",
      techStack: [
        "ReactJs",
        "Redux",
        "Saga",
        "SASS",
        "NodeJS",
        "AWS",
        "Cloudinary",
      ],
      description: "Personal Drive to store videos, images, zips, etc.",
      link: {
        label: "My Drive",
        href: "https://drive.charchitbansal.biz/",
      },
    },
    {
      title: "My GPT",
      techStack: [
        "Open AI",
        "ReactJS",
      ],
      description: "Platform to interact with new GPT 3 Trubo Model",
      link: {
        label: "My GPT",
        href: "https://chatgpt.charchitbansal.biz/",
      },
    },
    {
      title: "NewsMag",
      techStack: [
        "ReactJS",
        "News.org",
        "Cloudflare",
      ],
      description: "Platform to get latest news of multiple countries and categories.",
      link: {
        label: "News App",
        href: "https://news.charchitbansal.biz/",
      },
    },
    {
      title: "To-Do App",
      techStack: [
        "ReactJS"
      ],
      description: "Platform to craete and manage a To-Do List",
      link: {
        label: "To-Do App",
        href: "https://todo.charchitbansal.biz/",
      },
    },
    {
      title: "Weather App",
      techStack: [
        "ReactJS"
      ],
      description: "Platform to see and search weather of any location.",
      link: {
        label: "Weather App",
        href: "https://weather.charchitbansal.biz/",
      },
    },
  ],
} as const;
