import { GitHubIcon, LinkedInIcon, ChaseIcon, HcssIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Samad Karim Virani",
  initials: "SKV",
  location: "Houston, Texas, USA",
  locationLink: "https://www.google.com/maps/place/Houston",
  about: "Full Stack Engineer",
  summary:  "As a Full Stack Engineer, I have successfully led multiple initiatives to completion. I lead a team of engineers, establishing a workplace where people feel comfortable trying new things, making mistakes and taking risks all to make the best product we can. I currently work with Java, Springboot, Typescript, React and Oracle SQL. I have over 5 years of experience building scalable full stack applications in the Finance industry.",
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
      company: "JPMorgan Chase & Co.",
      link: "https://jpmorganchase.com",
      badges: ["Full Stack", "Team Lead", "Java", "React"],
      title: "Senior Associate Software Engineer",
      logo: ChaseIcon,
      start: "2021",
      end: "Present",
      description: "Implemented a dynamic survey tool. Built out a platform for other teams to deploy their micro frontends. Designed and developed a metadata driven SQL queriy generation, reducing delivery time from 1 week to 4 hours. Led squad of new joiners."
    },
    {
      company: "JPMorgan Chase & Co.",
      link: "https://jpmorganchase.com",
      badges: ["Backend", "Java", "Angular"],
      title: "Software Engineer",
      logo: ChaseIcon,
      start: "2019",
      end: "2021",
      description: "Improved UI based on user feedback. Migrated to private cloud. Onboarded API to Google APIGEE. Implemented Spring Service Registry."
    },
    {
      company: "HCSS",
      link: "https://hcss.com/",
      badges: ["PHP", "Ranorex"],
      title: "Quality Assurance Automation Intern",
      logo: HcssIcon,
      start: "2018",
      end: "2018",
      description: "Built exteral dependency tracking tool. Automated test suites for all apps."
    },
  ],
  skills: [
    "Java",
    "Springboot",
    "JavaScript",
    "TypeScript",
    "React",
    "Oracle SQL",
    "AWS Cloud Practitioner"
  ],
  projects: [
    {
      title: "YouTube Clone",
      techStack: [
        "Side Project",
        "TypeScript",
        "React",
        "Next.js",
        "Nodejs",
        "Firebase",
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
    },
  ],
} as const;
