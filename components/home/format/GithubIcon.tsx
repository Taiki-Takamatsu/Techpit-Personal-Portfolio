import Image from "next/image";

const GithubIcon = () => {
  return (
    <Image
      src={"https://github.com/Taiki-Takamatsu.png"}
      alt="Github Profile"
      width={64}
      height={64}
      className="w-24 h-24 rounded-full border-2 border-gray-300 mx-auto mb-4"
    />
  );
}

export default GithubIcon;
