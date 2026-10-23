import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { FacebookIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "MAGHAV AHUJA",
  initials: "MA",
  location: "Auckland, New Zealand",
  locationLink: "https://www.google.com/maps/place/Auckland",
  about: "A Graduate in Artificial Intelligence, Experienced in Systems, DevOps, and Technical Support.",
  summary: "I'm gaining experience in DevOps, by working with CI/CD, Linux, Docker, K8s, Ansible, Terraform on AWS, Azure and GCP by working on hands on projects. On the way to be a Site Reliability Engineer oneday. I hold over 5 years of professional experience, with upto 7 years of practical experience in IT. My first deployment journey",
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
        "Spearheaded IT infrastructure relocation from Rodney to Onehunga office, configuring complete UniFi networking and HomeAssistant IoT automations.",
        "Architected and maintained hybrid cloud deployments integrating on-premise bare-metal servers with Oracle Cloud and Proxmox.",
        "Deployed and hardened production servers including NGINX reverse proxies, web application servers, and secure VPN access using Wireguard and OPNsense.",
        "Containerized applications using Docker to streamline deployments and significantly reduce service downtime.",
        "Elevated infrastructure uptime, reliability, and security posture from ~50% to over 90% via proactive monitoring using Prometheus, Grafana, and Zabbix.",
      ],
      description: "Worked on Monitoring, Reliability of the servers, and devices, Virtualizing, Infrastructure Networking, IoT Automations, Cloud, IT Support, documentations, and website development using AI, OpenSource and propreitary tools including OPNsense, HomeAssistant, UniFi Controller, Prometheus, Grafana, Zabbix, Windows Server, Linux, FreeDOS, Oracle Cloud, Proxmox, Hyper-V, and various other tools according to modern integrations with AI agents",
    },
    {
      company: "TechWRXS",
      link: "https://www.techwrxs.com/",
      badges: [" New Zealand - Remote", "DevOps & Cloud, IT Support and Infrastructure"],
      title: "L3 Systems Engineer",
      start: "September 2024",
      end: "Present",
      points: [
        "Built a website and built a CI/CD pipeline on Jenkins for automating the deployment SDLC.",
        "Doing migration of Jenkins pipelines to GitHub Actions.",
        "Building an easy way for Kiwis to shop from all NZ shops at one place using Vibe Coding (AI), and Kiwi infrastructure.",
        "Used Microsoft 365 initially for ease, but then migrated to Zoho. Now due to infrastructure on Premises, have decided to work on NextCloud and other Open Source tools for office productivity and other internal communications.",
        "Opted for EmailCrane to avoid Email Hosting on premises.",
        "Leveraged OPNsense for internal networking, and VPN Setup with Firewalls, and infrastructure monitoring using Zenarmor, and ntopng.",
        "Using OracleCloud, AWS, and Azure for various kubernetes, and docker projects.",
        "Deployed internal AI agents, and internal AI infrastructure using GPUs on Rent, for internal employee AI adoption.",
        "Used Proxmox, Windows Server, Ubunutu, and SUSE, for managing the infrastructure on premises for virtualizations, and System Administration tasks.",
        "Automated a lot of server deployment using Ansible, and NGINX for multi server deployments in a cloud when more load is needed."
      ],
      description: "Built automated Azure DevOps CI/CD pipelines for .NET and React applications in an agile cloud environment.",
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
     {
      company: "Department of Education, Government of Delhi",
      link: "https://www.cbse.nic.in/",
      badges: ["New Delhi, India", "IT Support"],
      title: "Graduate Support Analyst",
      start: "September 2022",
      end: "February 2023",
      points: [
        "Supported daily IT operations for staff and business systems, resolving user needs through friendly, clear and consistent service.",
        "Maintained asset registers, operating procedures and business documentation to keep support work accurate, visible and repeatable.",
        "Delivered friendly, clear communication and consistent service quality among the government employees, officials and ministers.",
        "Ensured AV setup for the meetings, and provided laptops to the employees on my service desk.",
        "Documented, and recorded every equipment, device provided to the employee for infrastructure budgeting."
      ],
      description: "Built automated Azure DevOps CI/CD pipelines for .NET and React applications in an agile cloud environment.",
    },
    {
      company: "MyCaptain",
      link: "https://www.mycaptain.com/",
      badges: ["India - Remote", "IT Support"],
      title: "Technical Support Analyst",
      start: "September 2021",
      end: "September 2022",
      points: [
        "Administered and supported the Microsoft 365 ecosystem, including Microsoft Outlook, Exchange Online, Microsoft Teams, SharePoint Online, Microsoft Entra ID (Azure Active Directory), and the Microsoft 365 Admin Center, providing technical support to students, mentees, and internal users.",
        "Delivered real-time Level 1/Level 2 user support through phone, WhatsApp, and email, troubleshooting issues related to Microsoft Teams meeting access, authentication, Microsoft 365 accounts, Outlook/email connectivity, permissions, and access to workshop resources.",
        "Managed Microsoft 365 user accounts, licenses, groups, roles, and access permissions through the Microsoft 365 Admin Center and Microsoft Entra Admin Center, ensuring users had appropriate access to Exchange Online, Teams, SharePoint, and other licensed Microsoft 365 services.",
        "Implemented and maintained automated onboarding/offboarding and license-management workflows, reducing repetitive administrative tasks and ensuring Microsoft 365 licenses and organizational resources were provisioned and revoked according to user status.",
        "Managed the user identity lifecycle, including onboarding, offboarding, account provisioning/deprovisioning, license assignment/removal, group membership, and access management using Microsoft Entra ID (Azure AD) and Microsoft 365 administrative tools.",
        "Supported identity and access management (IAM) activities within Microsoft Entra ID, including user and group administration, authentication troubleshooting, role-based access, and permission management across Microsoft 365 services.",
        "Administered and maintained internal SharePoint Online sites, document libraries, permissions, and information-management structures used by employees and workshop participants for centralized communication, documentation, and resource sharing.",
        "Supported Exchange Online and Outlook environments by assisting users with mailbox access, email configuration, account-related issues, and Microsoft 365 email services.",
        "Performed routine Microsoft 365 administration and service management through the Microsoft 365 Admin Center, Exchange Admin Center, Entra Admin Center, SharePoint Admin Center, and Teams Admin Center.",

      ],
      description: "Helped an edtech startup to build their customer base during new covid lockdown online learnings.",
    },

    {
      company: "Shoutcoder",
      link: "https://www.shoutcoder.com.com/",
      badges: ["India - Remote", "IT Support"],
      title: "IT Support Specialist",
      start: "April 2020",
      end: "September 2021",
      points: [
        "Provided live technical support to the users via Tawk.to platform",
        "Resolved on time tickets on WHMCS platform.",
        "Ensured 100% customer during outages.",
        "Provided technical support for PHP based cPanel/WHM support, with integrations like LiteSpeed, MySQL phpmyadmin, Cloudflare for speed enhancements, uptime reliability and domain DNS mangement as well Email hosting records. "
      ],
      description: "PHP based technical support provider for a web hosting company using cPanel/DirectAdmin Web Hosting Control panels.",
    },
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
    "ntopng",
    "OPNsense",
    "UniFi",
    "ManageEngine MDM"
  ],

  security: [
    "Microsoft Sentinel",
    "SSL/TLS",
    "Reverse Proxy",
    "Bastion Host - OCI Bastion",
    "VPN configuration - WireGuard"
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
      liveUrl: "https://github.com/Maghav/cv_cl_maker",
      githubUrl: "https://github.com/Maghav/cv_cl_maker",
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
        href: "https://github.com/Maghav/cv_cl_maker",
      },
    },
    {
      title: "ONL9 Toolkit",
      status: "In Progress",
      liveUrl: "https://toolkit.onl9.club/",
      githubUrl: "https://github.com/Maghav/toolkit",
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
      githubUrl: "https://github.com/Maghav/learningphysics",
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
