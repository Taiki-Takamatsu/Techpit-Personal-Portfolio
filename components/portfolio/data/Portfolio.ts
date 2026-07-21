export type Portfolio = {
  title: string;
  image: string;
  description: string;
  url: {
    [key: string]: string
  };
  techIcons: string[];
}

export const portfolioes: Portfolio[] = [
  {
    title: "ポートフォリオサイト",
    image: "/portfolio/Portfolio-site.jpg",

    description: "今開いているWebサイト",

    url: {
      GitHub: "https://github.com/Taiki-Takamatsu/Techpit-Personal-Portfolio",
      Demo: "http://localhost:3000",
    },
    techIcons: ["/logos/typescript-original.svg", "/logos/React.webp", "/logos/Nextjs.webp", "/logos/tailwindcss-original.svg"],
  },
  {
    title: "自己紹介ページ",
    image: "/portfolio/myself.jpg",

    description: "最初に作った自己紹介ページ",

    url: {},
    techIcons: ["/logos/typescript-original.svg", "/logos/React.webp", "/logos/Nextjs.webp", "/logos/tailwindcss-original.svg"],
  },
  {
    title: "マークダウンエディタ",
    image: "/portfolio/markdown.jpg",

    description: "ReactとTypeScriptを用いて作成した。",

    url: {
      GitHub: "https://github.com/Taiki-Takamatsu/markdown-editor",
      Demo: "http://localhost:8080"
    },
    techIcons: ["/logos/typescript-original.svg", "/logos/React.webp"],
  },
  {
    title: "BBS App",
    image: "/portfolio/bbs-App.jpg",

    description: "初めてNext.jsを用いてアプリを作成した。",

    url: {
      GitHub: "https://github.com/Taiki-Takamatsu/markdown-editor",
      Demo: "http://localhost:3001"
    },
    techIcons: ["/logos/typescript-original.svg", "/logos/React.webp", "/logos/Nextjs.webp"],
  },
  {
    title: "ラン記録アプリ",
    image: "/portfolio/Flask.jpg",

    description: "Flaskを用いてランデータを記録してくれるアプリを作成",

    url: {
      Demo: "http://127.0.0.1:5000/"
    },
    techIcons: ["/logos/flask-original.svg", "/logos/python-original.svg"],
  },
]
