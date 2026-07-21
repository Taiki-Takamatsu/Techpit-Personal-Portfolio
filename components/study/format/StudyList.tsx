import Image from "next/image";
import { Study } from "../data/Study";
// ここでは、定義のほうのStudyを読み込み

// 型定義をしているStudyをPropsというオブジェクトに読み込んでいる
type Props = {
  study: Study;
};

export default function StudyList({
  study,
}: Props) {
  return (
    <div className="rounded-lg border-4 border-gray-200 p-6 h-140 flex flex-col">
      <div className="flex justify-center">
        <Image
          src={study.thumbnail}
          alt={study.title}
          width={350}
          height={350}
        />
      </div>

      <div className="mt-4 flex items-start justify-between gap-4 border-b-3 border-gray-700">
        <h2 className="text-2xl font-bold leading-tight line-clamp-3">
          {study.title}
        </h2>
        <a
          href={study.link}
          className="ml-auto shrink-0"
        >
          <Image
            src={study.textLogo}
            alt={study.textbook}
            width={25}
            height={25}
          />
        </a>
      </div>

      <div className="mt-3 line-clamp-4">
        {study.description}
      </div>

      <div className="mt-auto">
        <div>
          <span className="border-b text-xs">
            学習した技術
          </span>
          <div className="mt-2 flex flex-wrap gap-2">
            {
              study.techIcon.map((icon, index) => (
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
