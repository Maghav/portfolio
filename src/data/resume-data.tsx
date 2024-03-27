import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import CharchitImg from "./charchit.jpg";
import { FacebookIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Maghav",
  initials: "MA",
  location: "Auckland, New Zealand",
  locationLink: "https://www.google.com/maps/place/Auckland",
  about: "Full Stack Developer focused on building products with extra attention to detail",
  summary: "As a Full Stack Developer, I have successfully taken multiple products from 0 to 1. Currently, I work mostly with ReactJs and Next.js. I have knowledge of working on Data Analysis and Machine Learning from my Masters degree.",
  // avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocJp_Ah8HcaGgdRGnck3V4YxuANSJ6IBvZgnM1YjNnbgEmM=s83-c-mo",
  personalWebsiteUrl: "https://onl9.club",
  contact: {
    email: "maghavahuja01@gmail.com",
    tel: "+64 0228079079",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Maghav",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/maghavahuja/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://facebook.com/maghav.ahuja",
        icon: FacebookIcon,
      },
    ],
  },
  education: [
    {
      school: "Unitec Institute of Technology, Auckland, New Zealand",
      degree: "Masters in Applied Technologies",
      start: "2023",
      end: "2024",
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
      company: "Woolworths New Zealand",
      link: "https://www.countdown.co.nz",
      badges: [],
      title: "Fresh Food Assistant",
      start: "March 2023",
      end: "Present",
      description: "Night filling · Delicatessen · Seafood · Produce · Grocery · Checkouts · Team Leadership · Team Work",
    },
    {
      company: "Hackveda Limited",
      link: "https://hackveda.in/",
      badges: ["Remote"],
      title: "Machine Learning Intern",
      start: "March 2023",
      end: "Present",
      description: "Learned Django, and Machine Learning Algorithm Implementations, Analysis using Pandas and Matplotlib",
    },
  ],
  skills: [
   "SEO",
   "Digital Marketing",
   "Machine Learning",
   "Data Analysis",
   "Data Visualization",
   "Team work",
   "Problem Solving",
  ],

 frameworks_libraries_tools:[
   "ReactJS",
   "Next.js",
   "Selenium",
   "Django",
   "Tailwind",
   "Numpy",
   "Pandas",
   "Scikit-learn",
   "PowerBI",
   "OpenCV",,
   "Docker",
   "AWS",
   "Azure",
   "Git",
   "REST API",
   "PostgreSQL",
 ],

  languages:[
    "Python",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
  ],

  projects: [
    {
      title: "Personal Portfolio",
      techStack: [
        "ReactJS",
        "Next.js",
        "TailwindCSS",
        "Vercel",
        "TypeScript",
      ],
      description: "A simple portfolio website built using Next.js",
      link: {
        label: "Maghav Portfolio",
        href: "http://maghav.onl9.club/",
      },
    },
    {
      title: "ONL9.CLUB",
      techStack: [
        "PHP",
        "MySQL",
        "AJAX",
        "jQuery",
        "AWS",
      ],
      description: "Platform for all online services",
      link: {
        label: "ONl9 Club",
        href: "https://onl9.club/",
      },
    },
    {
      title: "ONL9 Toolkit",
      techStack: [
        "Next.js",
        "PostgresSQL",
        "TailwindCSS",
        "Vercel",
      ],
      description: "Platform for all online tools",
      link: {
        label: "Toolkit",
        href: "https://toolkit.onl9.club/",
      },
    },
  ],
} as const;
