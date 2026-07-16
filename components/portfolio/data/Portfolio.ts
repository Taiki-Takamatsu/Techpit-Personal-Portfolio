export type Portfolio = {
  title: string;
  image: string;
  description: string;
  githubUrl: string;
  appUrl: string;
  techIcons: string[];
}

export const portfolioes: Portfolio[] = [
  {
    title: "ポートフォリオサイト",
    image: "/portfolio/Portfolio-site.jpg",

    description: "今開いているWebサイト",

    githubUrl: "https://github.com/Taiki-Takamatsu/Techpit-Personal-Portfolio",
    appUrl: "http://localhost:3000",
    techIcons: ["/logos/html5-original.svg", "/logos/css3-original.svg"],
  }
]
