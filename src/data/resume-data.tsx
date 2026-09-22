import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { FacebookIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "MAGHAV AHUJA",
  initials: "MA",
  location: "Auckland, New Zealand",
  locationLink: "https://www.google.com/maps/place/Auckland",
  about: "A Graduate in Artificial Intelligence, Experienced in Systems, DevOps, and Technical Support.",
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
        name: "Facebook",
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
      company: "Neurix Limited",
      link: "https://www.neurix.co.nz",
      badges: ["Auckland, New Zealand", "Hybrid Cloud & Systems"],
      title: "Contract System/DevOps Engineer",
      start: "August 2025",
      end: "Present",
      points: [
        "Spearheaded IT infrastructure relocation from Rodney to Onehunga office, configuring complete UniFi networking and HomeAssistant IoT automation.",
        "Architected and maintained hybrid cloud deployments integrating on-premise bare-metal servers with AWS and Azure services.",
        "Deployed and hardened production servers including NGINX reverse proxies, web application servers, and secure VPN access.",
        "Containerized applications using Docker to streamline deployments and significantly reduce service downtime.",
        "Elevated infrastructure uptime, reliability, and security posture from ~50% to over 90% via proactive monitoring."
      ],
      description: "Spearheaded hybrid cloud infrastructure, UniFi networking, and server hardening, improving uptime from 50% to >90%.",
    },
    {
      company: "Mitre10 MEGA",
      link: "https://www.mitre10.co.nz",
      badges: ["Albany, Auckland, New Zealand"],
      title: "Security Team Member",
      start: "August 2025",
      end: "Present",
      points: [
        "Maintained store security, CCTV surveillance, and loss prevention across retail premises during peak weekend operations.",
        "Identified and mitigated safety hazards to uphold workplace health and safety compliance for staff and visitors.",
        "Delivered prompt customer assistance and applied conflict de-escalation in high-traffic retail environments."
      ],
      description: "Weekend store security, asset protection, and safety compliance operations.",
    },
    {
      company: "Datacom",
      link: "https://www.datacom.com/",
      badges: ["Auckland, New Zealand", "DevOps & Cloud"],
      title: "DevOps Engineer Intern",
      start: "April 2025",
      end: "September 2025",
      points: [
        "Progressed from software engineering intern into a dedicated DevOps role, managing automated release engineering.",
        "Built and maintained CI/CD automated deployment pipelines using Azure DevOps for .NET backends and React frontends.",
        "Provisioned and managed cloud resources, virtual machines, and app services within Microsoft Azure.",
        "Collaborated with agile engineering teams across the SDLC to streamline build cycles and enhance delivery reliability."
      ],
      description: "Built automated Azure DevOps CI/CD pipelines for .NET and React applications in an agile cloud environment.",
    },
    // {
    //   company: "Woolworths New Zealand",
    //   link: "https://www.woolworths.co.nz",
    //   badges: ["Auckland, New Zealand"],
    //   title: "Fresh Food Assistant",
    //   start: "March 2023",
    //   end: "December 2024",
    //   points: [
    //     "Delivered customer service and maintained stock inventory across fresh food departments.",
    //     "Enforced strict food hygiene, stock rotation (FIFO), and health & safety compliance standards."
    //   ],
    //   description: "Student Part Time Job",
    // },
  ],

  others: [
    "Microsoft 365",
    "NextCloud",
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
    "Proxmox"
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
    "ManageEngine MDM"
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
    "Fine-Tuning",
    "LangChain",
    "LangGraph",
    "n8n"
  ],

  projects: [
    {
      title: "Personal Portfolio",
      liveUrl: "http://maghav.onl9.club/",
      githubUrl: "https://github.com/Maghav/portfolio",
      points: [
        "Architected an interactive, high-contrast Neobrutalism developer portfolio showcasing cloud, DevOps, and automation projects.",
        "Implemented keyboard-driven Command Menu (Cmd+J / Ctrl+J), print-friendly resume styling, and responsive layout.",
        "Configured continuous deployment pipeline through GitHub and Vercel for high-speed edge delivery."
      ],
      skillsLearned: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Vercel CI/CD",
        "Neobrutalism Design"
      ],
      techStack: [
        "ReactJS",
        "Next.js",
        "TailwindCSS",
        "Vercel",
        "TypeScript",
      ],
      description: "Interactive Neobrutalism developer portfolio with command palette, print styles, and automated CI/CD.",
      link: {
        label: "Maghav Portfolio",
        href: "http://maghav.onl9.club/",
      },
    },
    {
      title: "Job Apply Pipeline",
      liveUrl: "https://github.com/Maghav/automated-job-apply-pipeline",
      githubUrl: "https://github.com/Maghav/automated-job-apply-pipeline",
      points: [
        "Engineered an autonomous AI agent system to analyze job descriptions and generate customized ATS-friendly CVs and cover letters.",
        "Orchestrated multi-step workflow automation using n8n and LangChain integrated with Hermes Agent and Nvidia Build.",
        "Automated job board application form pre-filling with mandatory human-in-the-loop review before final submission."
      ],
      skillsLearned: [
        "LangChain",
        "n8n Automation",
        "Hermes Agent",
        "Nvidia Build",
        "Prompt Engineering",
        "Python"
      ],
      techStack: [
        "LangChain",
        "Nvidia Build",
        "Hermes Agent",
        "n8n",
      ],
      description: "AI agent workflow generating tailored ATS-friendly CVs/CLs and automating application form submissions.",
      link: {
        label: "job-apply-pipeline",
        href: "https://github.com/Maghav/automated-job-apply-pipeline",
      },
    },
    {
      title: "ONL9 Toolkit 9",
      status: "In Progress",
      liveUrl: "https://toolkit.onl9.club/",
      githubUrl: "https://github.com/Maghav",
      points: [
        "Developing a centralized suite of web-based utilities and developer tools for daily workflow optimization.",
        "Designed responsive, modular user interfaces with TailwindCSS and Next.js server/client components.",
        "Integrated PostgreSQL database for persistent user preferences and dynamic state management."
      ],
      skillsLearned: [
        "Next.js",
        "PostgreSQL",
        "TailwindCSS",
        "Vercel",
        "REST APIs",
        "Full-Stack Architecture"
      ],
      techStack: [
        "Next.js",
        "PostgresSQL",
        "TailwindCSS",
        "Vercel",
      ],
      description: "Centralized web platform delivering everyday digital utilities and developer productivity tools.",
      link: {
        label: "Toolkit",
        href: "https://toolkit.onl9.club/",
      },
    },
    {
      title: "Learning Physics",
      liveUrl: "https://learningphysics.in/",
      githubUrl: "https://github.com/Maghav",
      points: [
        "Created an educational physics learning portal featuring curated study curriculum and interactive materials.",
        "Configured web hosting, domain DNS records, and SSL/TLS certificate renewal via cPanel.",
        "Structured content catalog and optimized relational database queries using MySQL."
      ],
      skillsLearned: [
        "Next.js",
        "TailwindCSS",
        "cPanel Hosting",
        "MySQL",
        "DNS & SSL Setup",
        "Responsive UI"
      ],
      techStack: [
        "CPanel",
        "Tailwind",
        "MySQL",
        "Vibe Coding - Replit",
        "Next.js",
      ],
      description: "Educational portal for physics students with organized curriculum and database-backed content.",
      link: {
        label: "Learning Physics",
        href: "https://learningphysics.in/",
      },
    },
    {
      title: "ONL9 Club",
      liveUrl: "https://onl9.club/",
      githubUrl: "https://github.com/Maghav",
      points: [
        "Deployed and administered a high-traffic community discussion forum dedicated to IT services and cloud topics.",
        "Configured OAuth 2.0 social login, anti-spam mechanisms, and custom REST API integrations.",
        "Hardened production Linux stack with automated backups, NGINX reverse proxy, and SSL/TLS encryption."
      ],
      skillsLearned: [
        "XenForo",
        "WordPress",
        "OAuth 2.0",
        "Linux Administration",
        "API Integrations",
        "Security Hardening"
      ],
      techStack: [
        "XenForo",
        "WordPress",
        "OAuth",
        "APIs",
      ],
      description: "Community discussion and knowledge sharing forum for systems, cloud, and IT professionals.",
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
