import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { FacebookIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Maghav Ahuja",
  initials: "MA",
  location: "Auckland, New Zealand",
  locationLink: "https://www.google.com/maps/place/Auckland",
  about: "A Graduate in Data Science and Machine Learning",
  summary: "I have learned various techniques to analyse data, visualise it and then use it for prediction using Machine Learning algorithms.",
  // avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocJp_Ah8HcaGgdRGnck3V4YxuANSJ6IBvZgnM1YjNnbgEmM=s83-c-mo",
  personalWebsiteUrl: "https://onl9.club",
  contact: {
    email: "maghavahuja01@gmail.com",
    tel: "+64 228079079",
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
      link: "https://www.woolworths.co.nz",
      badges: [],
      title: "Fresh Food Assistant",
      start: "March 2023",
      end: "December 2024",
      description: "Student Part Time Job",
    },
    {
      company: "Hackveda Limited",
      link: "https://hackveda.in/",
      badges: ["Remote"],
      title: "Machine Learning Intern",
      start: "March 2023",
      end: "July 2024",
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
   "Scikit-learn",
   "TensorFlow",
   "Keras",
   "Scipy",
   "NLTK",
   "PowerBI",
   "Django",
   "Tailwind",
   "Numpy",
   "Pandas",
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

  fcc_da_projects: [
    {
      title: "Mean Variance Standard Deviation Calculator",
      techStack: [
        "Python",
        "Numpy",
      ],
      description: "FreeCodeCamp 1st Data Analyst Project",
      link: {
        label: "Mean Variance Standard Deviation Calculator",
        href: "http://github.com/Maghav/fcc-sd-calculator/",
      },
    },
    {
      title: "Demographic Data Analysis",
      techStack: [
        "Matplotlib",
        "Pandas",
      ],
      description: "FreeCodeCamp 2nd Data Analysis Project",
      link: {
        label: "Demographic Data Analysis",
        href: "https://github.com/Maghav/demographic-da",
      },
    }, 
    {
      title: "Medical Data Visualiser",
      techStack: [
        "Pandas",
        "Seaborn",
        "Matplotlib",
      ],
      description: "FreeCodeCamp 3rd Project",
      link: {
        label: "Medical Data Visualiser",
        href: "https://github.com/Maghav/medical-data-visualiser",
      },
    },
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
      title: "The Khbri (under progress)",
      techStack: [
        "PHP",
        "MySQL",
        "WordPress",
        "Elementor",
        "CPanel",
      ],
      description: "News portal for global newspaper",
      link: {
        label: "The Khbri",
        href: "https://khbri.com/",
      },
    },
    {
      title: "ONL9 Toolkit 9 (under progress)",
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
  attachments: [
    {
      title: "Resume",
      link:{
        label: "Resume",
        href: "https://drive.google.com/file/d/1kQn1u9VZvL4W4h7QbH-7lOy9wC6s5B2P/view?usp=sharing",
      },

    },
    {
      title: "Unitec Transcript",
      link:{
        label: "Unitec Transcript",
        href: "https://www.icloud.com/iclouddrive/0e4E0dIiFTZUgB0wQW7IV7FSA#SSR_TSRPT",
      }
    }
  ]
} as const;
