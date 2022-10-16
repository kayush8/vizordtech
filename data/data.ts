import {
  AimIcon,
  CodeIcon,
  ContentIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  PenIcon,
  ShootingStarIcon,
  TwitterIcon,
  UXIcon,
} from "@components/utility/Icons";

export const bannerData = {
  heading: ["Where", "aesthetics", "and", "functionality", "meet"],
  para1: [
    "9to5 Networks is an award-winning",
    "design studio that shapes",
    "ideas through clever and",
    "simple design solutions with",
    "functionality at its core.",
  ],
  para2: [
    "We’re based in India but",
    "working worldwide. Partnering",
    "with local and international",
    "clients that value design just as",
    "much as we do.",
  ],
};

export const service_list = [
  { name: "Strategy", href: "/", image: "/images/1.jpg" },
  { name: "Creative Content", href: "/", image: "/images/2.jpg" },
  { name: "Web Development", href: "/", image: "/images/3.jpg" },
  { name: "Design Services", href: "/", image: "/images/4.jpg" },
  { name: "Digital Marketing", href: "/", image: "/images/5.jpg" },
];

export const clients_list = [
  { name: "Awwwards", href: "/", image: "/images/logo-awwwards.png" },
  { name: "Forbes", href: "/", image: "/images/logo-forbes.png" },
  {
    name: "Latin American Design",
    href: "/",
    image: "/images/logo-lad.png",
  },
  { name: "Transform", href: "/", image: "/images/logo-transform.png" },
];

export const projects_list = [
  {
    image: "/images/1.webp",
    name: "Furniture Landing Page",
    year: 2021,
    tags: ["Portfolio", "React", "Blog"],
  },
  {
    image: "/images/2.webp",
    name: "Product App Component",
    year: 2021,
    tags: ["Portfolio", "React", "Blog"],
  },
  {
    image: "/images/3.webp",
    name: "Login/Signup Integration",
    year: 2021,
    tags: ["Portfolio", "React", "Blog"],
  },
  {
    image: "/images/4.webp",
    name: "Social Media Components",
    year: 2021,
    tags: ["Portfolio", "React", "Blog"],
  },
];

export const FOOTER_ROUTES = [
  {
    name: "Work",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Services",
    href: "#",
  },
  {
    name: "Verticals",
    href: "#",
  },
  {
    name: "Careers",
    href: "#",
  },
  {
    name: "Ideas",
    href: "#",
  },
  {
    name: "News",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

export const SOCIAL_ROUTES = [
  { name: "Facebook", href: "#", Icon: FacebookIcon },
  { name: "Twitter", href: "#", Icon: TwitterIcon },
  { name: "Instagram", href: "#", Icon: InstagramIcon },
  { name: "LinkedIn", href: "#", Icon: LinkedinIcon },
  { name: "Github", href: "#", Icon: GithubIcon },
];

export const quoteService = [
  { title: "Website design", desc: "I need a website design.", icon: PenIcon },
  {
    title: "Website development",
    desc: "I need a website built.",
    icon: CodeIcon,
  },
  { title: "UX Research", desc: "I want to understand users.", icon: UXIcon },
  {
    title: "Content creation",
    desc: "I want to grow my blog.",
    icon: ContentIcon,
  },
  {
    title: "SEO Optimization",
    desc: "Help me grow organically.",
    icon: AimIcon,
  },
  {
    title: "Something else",
    desc: "We're here to help!",
    icon: ShootingStarIcon,
  },
];
