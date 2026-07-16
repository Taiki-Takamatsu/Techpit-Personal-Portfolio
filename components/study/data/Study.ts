export type Study = {
  title: string;
  thumbnail: string;
  link: string;
  textbook: string;
  textLogo: string;
  description: string;
  techIcon: string[];
}

export const Studies: Study[] = [
  {
    title: "Webの基礎を学びながらReact Hooksでポートフォリオサイトを作ろう",
    thumbnail: "/thumbnails/194.png",
    link: "https://www.techpit.jp/courses/194",
    textbook: "techpit",
    textLogo: "/logos/techpit.png",

    description: "初めてのReactの授業で、よく理解できないまま講義を進めていった記憶",

    techIcon: ["/logos/javascript-original.svg", "/logos/React.webp"],
  },
  {
    title: "【JavaScript】コマンドバトルを作りながらクラス設計を学ぼう！",
    thumbnail: "/thumbnails/197.jpg",
    link: "https://www.techpit.jp/courses/197",
    textbook: "techpit",
    textLogo: "/logos/techpit.png",

    description: "JavaScriptのアロー関数に慣れないなぁと思いながら講義を進めていた",

    techIcon: ["/logos/javascript-original.svg"],
  },
]
