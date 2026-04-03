import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { FacebookIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "MAGHAV AHUJA",
  initials: "MA",
  location: "Auckland, New Zealand",
  locationLink: "https://www.google.com/maps/place/Auckland",
  about: "A Graduate in DevOps, Systems, and Technical Support Engineering",
  summary: "I'm gaining experience in DevOps, by working with CI/CD, Linux, Docker, K8s, Ansible, Terraform on AWS, Azure and GCP by working on hands on projects. On the way to be a Site Reliability Engineer oneday.",
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
      start: "Feb 2023",
      end: "July 2024",
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
      company: "Genoa Engineering",
      link: "https://www.genoa.com",
      badges: ["Rodney, Auckland, New Zealand"],
      title: "Casual System/DevOps Engineer",
      start: "August 2025",
      end: "Present",
      description: "Setting up and supporting on-prem servers, and making best use of cloud services for deployment of projects. The focus of the company remains more on IoT services, though leveraging cloud platforms like Azure and AWS for our jobs helps in achieving goals, I am honoured to be part of the company by providing support to have a hybdrid cloud environment.",
    },
    {
      company: "Mitre10 MEGA",
      link: "https://www.mitre10.co.nz",
      badges: ["Albany, Auckland, New Zealand"],
      title: "Security Team Member",
      start: "August 2025",
      end: "Present",
      description: "Weekend job to be busy during the weekends.",
    },
    {
      company: "Datacom",
      link: "https://www.datacom.com/",
      badges: ["Auckland, New Zealand"],
      title: "Intern",
      start: "April 2025",
      end: "September 2025",
      description: "I joined as a Software engineer, and ended up being a DevOps Engineer. Learned Azure DevOps, .NET and Reactjs project deployments, software development cycle, and Azure Cloud",
    },
    {
      company: "Woolworths New Zealand",
      link: "https://www.woolworths.co.nz",
      badges: ["Auckland, New Zealand"],
      title: "Fresh Food Assistant",
      start: "March 2023",
      end: "December 2024",
      description: "Student Part Time Job",
    },
  ],
  
  others:[
    "Microsoft 365",
    "NodeJS",
    "ReactJS",
    "Next.js",
    ".NET framework",
    "PHP Scripts",
    "MySQL",
    "PostgresSQL",
    "SQL Server"

  ],

  infraOSCloud: [
   "NGINX",
   "Apache",
   "CentOS/RHEL",
   "Ubuntu/Debian",
   "Windows Server 2019, 2022, 2025",
   "SUSELinux",
   "Amazon Web Services - AWS",
   "Microsoft Azure",
   "Google Cloud - GCP",
   "Oracle Cloud Infrastructure - OCI",
  ],

  a_iac:[
   "Terraform",
   "Ansible",
   "Bash Scripting",
   "Python Scripting",
   "Selenium",
 ],

  cicd:[
    "Git",
    "Jenkins",
    "Azure DevOps",
    "GitHub Actions",
  ],
  container_orchestration:[
    "Docker",
    "Kubernetes",
    "Helm",
  ],
  monitoring_networking:[
    "Grafana",
    "Prometheus",
    "Elastic Stack - ELK",
    "Tailscale"
  ],

  security:[
    "Microsoft Sentinel",
    "SSL/TLS",
    "Reverse Proxy",
    "Bastion Host - OCI Bastion"
  ],

  ai:[
    "OpenClaw"
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
      title: "Sadservers Tasks",
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
  certifications: [
    {
      title: "MS-900: Microsoft 365 Fundamentals",
      link:{
        label: "MS-900",
        href: "https://learn.microsoft.com/en-us/credentials/certifications/microsoft-365-fundamentals/",
      },
    },
    {
      title: "CJE: Certfied Jenkins Engineer",
      link:{
        label: "CJE",
        href: "https://www.cloudbees.com/cloudbees-university/training-certifications/jenkins",
      }
    },
    {
      title: "Hashicorp Certified: Terraform Associate",
      link:{
        label: "004",
        href: "https://developer.hashicorp.com/certifications/infrastructure-automations",
      }
    },
    {
      title: "CKA: Certified Kubernetes Administrator",
      link:{
        label: "CKA",
        href: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals",
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
      title: "Unitec Letter of Completion",
      link:{
        label: "Unitec LOC",
        href: "https://www.icloud.com/iclouddrive/0e4E0dIiFTZUgB0wQW7IV7FSA#SSR_TSRPT",
      }
    }
  ]
} as const;
