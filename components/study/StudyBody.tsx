import StudyList from "./format/StudyList";
import { Studies } from "./data/Study";
// ここでは実際の値のStudiesを読み込んでいる
import Image from "next/image";


export default function StudyBody() {
  return (
    <div>
      <h1 className="mt-5 flex justify-center text-3xl font-bold">学習記録</h1>

      <div className="grid grid-cols-2 gap-4 p-4">
        {
          Studies.map((study) => (
            <StudyList
              key={study.title}
              study={study}
            />
          ))
        }
      </div>
    </div >

  );
}
