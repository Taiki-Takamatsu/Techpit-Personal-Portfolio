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
    title: "Pythonオブジェクト指向プログラミング入門。難解なオブジェクト指向の概念をアプリを開発しながら徹底解説。",
    thumbnail: "/thumbnails/5592728_8531.webp",
    link: "https://nswjp.udemy.com/course/python-oop-1/",
    textbook: "udemy",
    textLogo: "/logos/udemy.png",

    description: "個人的に一番楽しかった授業",

    techIcon: ["/logos/python-original.svg"],
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
    title: "JavaScript と比較しながら学ぶ TypeScript",
    thumbnail: "/thumbnails/248.png",
    link: "https://www.techpit.jp/courses/248",
    textbook: "techpit",
    textLogo: "/logos/techpit.png",

    description: "Next.jsの便利な機能を学べた。RSCによるルーティング、サーバーコンポーネントとクライアントコンポーネントの違いなど",

    techIcon: ["/logos/javascript-original.svg", "/logos/typescript-original.svg"],
  },
  {
    title: "React × TypeScript で手を動かながら学ぶ！モダンなフロントエンド開発入門",
    thumbnail: "/thumbnails/111.jpg",
    link: "https://www.techpit.jp/courses/111",
    textbook: "techpit",
    textLogo: "/logos/techpit.png",

    description: "ReactとTypeScriptを組み合わせることによる相乗効果を知れた。",

    techIcon: ["/logos/typescript-original.svg", "/logos/React.webp",],
  },
  {
    title: "最新のNext.js 16の特徴的な仕組みを解説し、簡単なWebアプリを作成します。Vercelにデプロイし、アプリを公開するところまで実践できます",
    thumbnail: "/thumbnails/111.jpg",
    link: "https://nswjp.udemy.com/course/nextjs_beginner/",
    textbook: "techpit/Udemy",
    textLogo: "/logos/udemy.png",

    description: "Next.jsの便利な機能を学べた。RSCによるルーティング、サーバーコンポーネントとクライアントコンポーネントの違いなど",

    techIcon: ["/logos/typescript-original.svg", "/logos/React.webp", "/logos/Nextjs.webp"],
  },

]
