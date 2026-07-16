export type Skill = {
  title: string;
  icon: string;
  experience: string;
  description: string;
  tags: string[];
  level: string;
}

export const Skills: Skill[] = [
  {
    title: "VBA",
    icon: "/logos/VBA.svg",
    experience: "高校2年生-2か月",

    description: "初めてのプログラミング言語。高校の情報の授業でブラインドタッチは愚か、キーボードの文字の場所すらわからずやっていたので、友達のコードをコピーしてサボってました。",

    tags: ["Excel"],
    level: "1",
  },
  {
    title: "C++",
    icon: "/logos/cpp.svg",
    experience: "高校3年生-1年間",

    description: "学生の頃通っていた将棋教室の先生に進められて始めました。プログラミングは学校の授業でも全くできなかったレベルなので不安でした。卒業論文のテーマとして、オセロの開放度理論という戦法の有効性について調べるためにコンピュータ同士で対戦を行わせました。",

    tags: ["Visual Studio"],
    level: "2",
  },

]
