"use client";

import Image from "next/image";

type Props = {
  onClose: () => void;
};

export default function IconModal({
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

        <div className="mb-4 relative w-full">
          <Image
            src="/taiki/Taiki_01.jpg"
            alt="Taiki"
            width={600}
            height={600}
            className="object-cover"
          />
        </div>
        <p className="mt-2">アメリカのタコスを食べる大暉</p>
      </div>
    </div>
  );

}
