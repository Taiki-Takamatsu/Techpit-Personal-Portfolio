import { certifications } from "../data/Certifications";

export default function CertificationList() {
  return (
    <section className="max-w-3xl mx-auto bg-slate-300 rounded-xl p-6 shadow-lg mt-6">

      <ul className="space-y-3">
        {certifications.map((certification, index) => (
          <li
            key={index}
            className="bg-blue-300 p-4 rounded-lg shadow-md flex justify-between items-center">
            <span className="font-semibold">
              {certification.name}
            </span>
            <span className="font-semibold">
              {certification.acquiredAt}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
