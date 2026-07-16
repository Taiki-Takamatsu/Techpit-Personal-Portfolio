import Image from "next/image";

const Techlogos: Record<string, string> = {
  VBA: "/logos/VBA.svg",
  HTML: "/logos/html5-original.svg",
  CSS: "/logos/css3-original.svg",
  sphero: "/logos/sphero.webp",
  Cpp: "/logos/cpp.svg",
  php: "/logos/php-original.svg",
  Laravel: "/logos/laravel-original.svg",
  docker: "/logos/docker.svg",
  SQL: "/logos/mysql-original.svg",
  JS: "/logos/javascript-original.svg",
  Python: "/logos/python-original.svg",
  Flask: "/logos/flask-original.svg",
  SQLite: "/logos/sqlite-original.svg",
  Django: "/logos/django-plain.svg",
  JQuery: "/logos/jquery-original.svg",
  React: "/logos/React.webp",
  TS: "/logos/typescript-original.svg",
  Nextjs: "/logos/Nextjs.webp",
  vercel: "/logos/vercel.svg",
  TailwindCSS: "/logos/tailwindcss-original.svg",
};

const TechIcons: React.FC<{ lang: string }> = ({ lang }) => {
  return (
    <div className="m-1">
      <Image src={Techlogos[lang]} alt={lang} width={100} height={100} />
    </div>
  );
}

export default TechIcons;
