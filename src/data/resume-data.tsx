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
      company: "Hyppadrive.ai",
      link: "https://www.hypadrive.ai",
      badges: ["Contract, Remote, New Zealand"],
      title: "DevOps Engineer",
      start: "June 2026",
      end: "Present",
      description: "Setting up and supporting on-prem servers, and making best use of cloud services for deployment of projects. The focus of the company remains more on IoT services, though leveraging cloud platforms like Azure and AWS for our jobs helps in achieving goals, I am honoured to be part of the company by providing support to have a hybdrid cloud environment.",
    },
    {
      company: "Neurix Limited",
      link: "https://www.neurix.co.nz",
      badges: ["Auckland, New Zealand"],
      title: "Contract System/DevOps Engineer",
      start: "August 2025",
      end: "Present",
      description: "Setting up and supporting on-prem servers, and making best use of cloud services for deployment of projects. The focus of the company remains more on IoT services, though leveraging cloud platforms like Azure and AWS for our jobs helps in achieving goals, I am honoured to be part of the company by providing support to have a hybdrid cloud environment. Worked on migration of infrastructure from Rodney's office to Onehunga office (relocation). Setup all the networks using UniFi, and IoT devices automation using HomeAssistant in the new office. Worked on servers setup including VPN server, NGINX, and web servers for website. Provided technical support and worked on reliability and security to ensure everything stays up from 50% to over 90%. Worked on containerised applications to reduce downtime.",
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

  others: [
    "Microsoft 365",
    "NodeJS",
    "ReactJS",
    "Next.js",
    ".NET framework",
    "PHP Scripts",
    "MySQL",
    "PostgresSQL",
    "SQL Server",
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

  a_iac: [
    "Terraform",
    "AWS CloudFront",
    "Ansible",
    "Bash Scripting",
    "Python Scripting",
    "Selenium",
  ],

  cicd: [
    "Git",
    "Jenkins",
    "Azure DevOps",
    "GitHub Actions",
  ],

  container_orchestration: [
    "Docker",
    "Kubernetes",
    "Helm",
  ],

  monitoring_networking: [
    "Grafana",
    "Prometheus",
    "Zabbix",
    "Elastic Stack - ELK",
    "Tailscale",
    "OPNsense",
    "UniFi",
  ],

  security: [
    "Microsoft Sentinel",
    "SSL/TLS",
    "Reverse Proxy",
    "Bastion Host - OCI Bastion",
    "VPN configuration"
  ],

  ai: [
    "OpenClaw",
    "Hermes Agent",
    "Ollama",
    "LM-Studio",
    "Fine-Tuning"
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
      title: "Learning Physics",
      techStack: [
        "CPanel",
        "Tailwind",
        "MySQL",
        "Vibe Coding - Replit",
        "Next.js",
      ],
      description: "A website for my dad.",
      link: {
        label: "Learning Physics",
        href: "https://learningphysics.in/",
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
    {
      title: "ONL9 Club",
      techStack: [
        "XenForo",
        "WordPress",
        "OAuth",
        "APIs",
      ],
      description: "Forum for almost every IT service.",
      link: {
        label: "Onl9Club",
        href: "https://onl9.club/",
      },
    },
  ],

  experience: [
    {
      title: "SadServers Troubleshooting experience",
      techStack: [
        "NGINX, Apache",
        "Linux Troubleshooting",
        "SSH, Systemd",
        "Networking/DNS/ Firewalls",
        "Cron jobs",
        "Docker, Kubernetes",
        "Databases - MySQL, Postgres"

      ],
      description: "Working on troubleshooting different VMs of linux boosting my skillset on Linux, DevOps, and networking concepts.",
      link: {
        label: "Sadservers",
        href: "https://sadservers.com/",
      },
    },
    {
      title: "KodeKloud Engineer",
      techStack: [
        "Git, Docker, Kubernetes",
        "CI/CD - Jenkins, Github Actions",
        "Cloud - Azure, AWS",
        "Ansible, Terraform",
        "Linux, NGINX, Apache",
      ],
      description: "100 days of DevOps, Cloud, and MLOps",
      link: {
        label: "kodeKloud Engineer",
        href: "https://kodekloud.com",
      },
    },
    {
      title: "Iximuiuz Labs",
      techStack: [
        "Linux",
        "Learn Kubernetes the very hard way",
        "Docker",
        "Troubleshooting",
      ],
      description: "Another platform to practice real-world problems on real VMs",
      link: {
        label: "Iximiuz",
        href: "https://labs.iximiuz.com/",
      },
    },
  ],

  attachments: [
    {
      title: "Resume",
      link: {
        label: "Resume",
        href: "/",
      },
    },
    {
      title: "Unitec Letter of Completion",
      link: {
        label: "Unitec LOC",
        href: "/",
      },
    },
  ],
} as const;
