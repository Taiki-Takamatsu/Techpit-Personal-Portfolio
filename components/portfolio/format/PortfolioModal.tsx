import { Portfolio } from "../data/Portfolio";
import Image from "next/image";

type Props = {
  portfolio: Portfolio;
  onClose: () => void;
};

export default function PortfolioModal({
  portfolio,
  onClose,
}: Props) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="relative w-[90%] max-w-2xl rounded-lg bg-white p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-0 top-0 text-4xl font-bold"
        >
          ×
        </button>

        <div className="mb-4 relative h-[300px] w-full">
          <Image
            src={portfolio.image}
            alt={portfolio.title}
            fill
            className="rounded object-cover"
          />
        </div>

        <h1 className="mb-2 text-2xl font-bold">{portfolio.title}</h1>
        <p className="mb-4 text-gray-700">{portfolio.description}</p>

        <div className="flex gap-4">
          {portfolio.githubUrl && (
            <a
              href={portfolio.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              GitHub
            </a>
          )}
          {portfolio.appUrl && (
            <a
              href={portfolio.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              App
            </a>
          )}
        </div>
        <div className="mt-3 font-bold text-2xl">
          使用技術
          <div className="mt-2 flex flex-wrap gap-2">
            {
              portfolio.techIcons.map((icon, index) => (
                <Image
                  key={index}
                  src={icon}
                  alt="TechIcon"
                  width={50}
                  height={50}
                  className="mr-2"
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
