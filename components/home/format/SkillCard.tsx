import Image from "next/image";
import { Skill } from "../data/Skills";

type Props = {
  skill: Skill;
};

export default function SkillCard({
  skill,
}: Props) {
  return (
    <div className="max-w-7xl mx-auto bg-slate-300 rounded-xl p-6 shadow-lg mt-10">
      <div className="flex gap-8">

        <div className="flex-shrink-0">
          <Image src={skill.icon} alt={skill.title} width={150} height={150} />
        </div>

        <div className="flex-1">

          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold">
                {skill.title}
              </h2>

              <div className="w-16 border-b-4 border-orange-400 mt-1" />
            </div>

            <span className="text-lg">
              {skill.experience}
            </span>
          </div>

          {/* 本文 */}
          <p className="mt-4 leading-relaxed">
            {skill.description}
          </p>

          {/* タグ */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-blue-600 px-3 py-1 rounded-full text-sm text-white">
              # {skill.tags}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
