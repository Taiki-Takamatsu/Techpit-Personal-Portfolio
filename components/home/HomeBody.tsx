"use client";

import TechIcons from "./format/TechIcons";
import CertificationList from "./format/CertificationList";
import SkillCard from "./format/SkillCard";
import { Skills } from "./data/Skills";
import ProfileList from "./format/ProfileList";
import Image from "next/image";
import { useState } from "react";
import IconModal from "./format/IconModal";


const langs = [
  "VBA",
  "HTML",
  "CSS",
  "sphero",
  "Cpp",
  "php",
  "Laravel",
  "docker",
  "SQL",
  "JS",
  "Python",
  "Flask",
  "SQLite",
  "Django",
  "JQuery",
  "React",
  "TS",
  "Nextjs",
  "vercel",
  "TailwindCSS",
];

export default function HoemBody() {
  const [selectedIcon, setSelectedIcon] = useState(false);
  return (
    <div>
      <h1 className="mt-3 flex justify-center text-5xl font-bold">HOME</h1>

      <div>
        <div className="mt-5 flex justify-center">
          <Image
            src="/taiki/Taiki_01.jpg" alt="taiki" width={200} height={200} className="rounded-full object-cover"
            onClick={() => setSelectedIcon(true)}
          />
        </div>
      </div>

      <h1 className="mt-5 flex justify-center text-3xl font-bold">プロフィール</h1>


      <ProfileList />

      <h1 className="mt-10 flex justify-center text-3xl font-bold">資格</h1>
      <CertificationList />

      <h1 className="mt-10 flex justify-center text-3xl font-bold">主な経験</h1>
      {
        Skills.map((skill) => (
          <SkillCard
            key={skill.title}
            skill={skill}
          />
        ))
      }

      <div>
        <div className="border mt-10 pt-4 mb-10">
          <div className="flex justify-center flex-wrap">
            {langs.map((lang, i) => (
              <TechIcons key={i} lang={lang} />
            ))}
          </div>
        </div>
      </div>
      {selectedIcon && <IconModal onClose={() => setSelectedIcon(false)} />}
    </div >
  );
}
