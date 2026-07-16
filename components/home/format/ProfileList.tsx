import { profiles } from "../data/Profile";

export default function ProfileList() {
  return (
    <section className="max-w-3xl mx-auto bg-slate-300 rounded-xl p-6 shadow-lg mt-6">

      <ul className="space-y-3">
        {profiles.map((profile, index) => (
          <li
            key={index}
            className="bg-blue-300 p-4 rounded-lg shadow-md flex ">
            <span className="font-semibold w-32 shrink-0">
              {profile.name}
            </span>
            <span className="font-semibold">
              {profile.value}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
