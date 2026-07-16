import Image from "next/image";
import { Portfolio } from "../data/Portfolio";

type Props = {
  portfolio: Portfolio;
  onClick: () => void;
};

export default function PortfolioList({
  portfolio,
  onClick,
}: Props) {
  return (
    <div
      className="rounded-lg border-4 border-gray-200 flex flex-col cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-[250px] w-full">
        <Image
          src={portfolio.image}
          alt={portfolio.title}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h2 className="mt-5 flex justify-center text-1xl font-bold">{portfolio.title}</h2>
      </div>

    </div>

  );

}
