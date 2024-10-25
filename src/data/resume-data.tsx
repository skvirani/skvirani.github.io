import { GitHubIcon, LinkedInIcon, ProcoreIcon, ChaseIcon, HcssIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Samad Karim Virani",
  initials: "SKV",
  location: "Houston, Texas, USA",
  locationLink: "https://www.google.com/maps/place/Houston",
  about: "Full-Stack Engineer",
  summary:  "Seasoned Full-Stack Engineer driving successful project initiatives and fostering an innovative workplace culture. Proficient in Java, Typescript, React, Spring Boot, and Oracle SQL, with over 5 years of expertise crafting scalable solutions in the Fin-Tech sector.",
  avatarUrl: "https://avatars.githubusercontent.com/u/22201043?v=4",
  personalWebsiteUrl: "https://samadkvirani.com",
  contact: {
    email: "virani.samad@gmail.com",
    tel: "+12818657378",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/skvirani",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/samadkvirani/",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [
    {
      school: "University of Houston",
      degree: "Bachelor's Degree in Computer Science and Minor in Mathematics",
      start: "2015",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Procore",
      link: "https://procore.com",
      badges: ["Ruby on Rails", "React", "NestJS"],
      title: "Senior Software Engineer",
      logo: ProcoreIcon,
      start: "2024",
      end: "Present",
      description: "Full-Stack Developer, focusing on Back-End."
    },
    {
      company: "JPMorgan Chase & Co.",
      link: "https://jpmorganchase.com",
      badges: ["Team Lead", "Spring Boot", "React"],
      title: "Senior Associate Software Engineer",
      logo: ChaseIcon,
      start: "2021",
      end: "2024",
      description: "Accomplished Full-Stack Developer: Crafted a dynamic survey tool, streamlined microfrontend deployment, optimized SQL processes, and mentored teams for success."
    },
    {
      company: "JPMorgan Chase & Co.",
      link: "https://jpmorganchase.com",
      badges: ["Java", "Angular"],
      title: "Software Engineer",
      logo: ChaseIcon,
      start: "2019",
      end: "2021",
      description: "Elevated user experience and performance, orchestrated cloud migration, ensured high uptime, automated deployments, and led APIGEE integration."
    },
    {
      company: "HCSS",
      link: "https://hcss.com/",
      badges: ["PHP", "Ranorex"],
      title: "Quality Assurance Automation Intern",
      logo: HcssIcon,
      start: "2018",
      end: "2018",
      description: "Streamlined testing processes, managed QA automation resources, and led full-stack development for internal product releases."
    },
  ],
  skills: [
    {key:"Java", variant: "default"},
    {key:"Spring Boot", variant: "default"},
    {key:"React", variant: "default"},
    {key:"JavaScript", variant: "default"},
    {key:"TypeScript", variant: "default"},
    {key:"Oracle SQL", variant: "default"},
    {key:"Git", variant: "default"},
  ],
  certs: [
    {key:"AWS Cloud Practitioner", variant: "secondary"}
  ],
  paradigms: [
    {key:"Agile", variant: "outline"},
    {key:"Test Driven Development (TDD)", variant: "outline"},
    {key:"Object Oriented Programming (OOP)", variant: "outline"},
    {key:"CI/CD", variant: "outline"},

  ],
  projects: [
    {
      title: "YouTube Clone",
      techStack: [
        "Side Project",
        "In Progress",
        "React",
        "Next.js",
        "GCP",
      ],
      description: "An app that hosts and streams video and has user profiles with public and private videos.",
      logo: null,
    },
    {
      title: "Force For Good",
      techStack: ["NGO", "Salesforce", "Small Team"],
      description:
        "Full Stack web app that allows SERJobs to match grants to candidates who have significant barriers to employment.",
      logo: null,
      link: {
        label: "SERJobs",
        href: "https://serjobs.org/",
      },
    },
    {
      title: "Hackathon Judge",
      techStack: ["Volunteering", "Judge"],
      description:
        "Volunteered as a judge for various hackathons including HackRice and JPMC Code For Good.",
      logo: null,
      link: {
        label: "Code For Good",
        href: "https://careers.jpmorgan.com/us/en/students/programs/code-for-good?search=&tags=location__Americas__UnitedStatesofAmerica"
      }
    },
  ],
} as const;
