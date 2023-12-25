
export const METADATA = {
  title: "Portfolio | Muhammad Waleed",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://muhammadwaleed2023.netlify.com/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I develop Customizable Software Solutions",
  "Proficient in  modern Frontend and Backend Frameworks",
  "I Provide dynamic user experience",
];

export const EMAIL = "wallo4038@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/muhammad-waleeed2406/",
  github: "https://github.com/wallo4038",
  gmail:"mailto:wallo4038@gmail.com",
  whatsapp:"https://wa.me/03131180228",
  instagram: "https://www.instagram.com/waleedaaaayyyy636/",
  facebook: "https://www.facebook.com/profile.php?id=100027265320233",
  twitter: "https://twitter.com/test6774",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
  name: "AmbuServe Tracking Dashboard",
  image: "/projects/tracking.png",
  blurImage: "/projects/tracking.png",
  description: "Live Ambulance Tracking Dashboard, (demo@gmail.com,demo)",
  gradient: ["#153BB9", "#0E2C8B"],
  url: "https://ambuserveadminfinal.netlify.com",
  tech: ["react", "mongo", "googlemap", "tailwind"],
},
  {
    name: "E_commerce Admin",
    image: "/projects/ambuserve.png",
    blurImage: "/projects/ambuserve.png",
    description: "latest widgets and Graphics  for business analysis",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://ambuserveadminfinal.netlify.com",
    tech: ["react", "mui", "mongo","tailwind"],
  },
   {
    name: "MyCustomhub - Shopify Store",
    image: "/projects/ch.png",
    blurImage: "/projects/blur/cardize-blur.jpg",
    description: "E_Commerce Jwellery Platform",
    gradient: ["#552A04", "#614023"],
    url: "https://mycustomhub.com",
    tech: ["javascript", "html", "css"],
  },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "tailwind",
    "Bootstrap",
    "sass",
    "html",
    "css",
    "gsap",

  ],
  Backend: ["Node","express","Mongo", "dotnet","Mysql", "SQlServer","vb.net"],
  other: ["Figma","git", "Vercel", "Netlify", "Shopify"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Web developer at e-Creatorz Karachi (Current)",
    size: ItemSize.SMALL,
    subtitle:
      "Working as .NET Developer on Business and Educational ERP'S",
    image: "/timeline/ecz.png",
    slideImage: "/timeline/ecz.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Frontend Engineer ",
    size: ItemSize.SMALL,
    subtitle:
      "Frontend Engineering @ Core team, solving problems around E-commerce Website performance and Optimization",
    image: "/timeline/ch.png",
    slideImage: "/timeline/ch.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
