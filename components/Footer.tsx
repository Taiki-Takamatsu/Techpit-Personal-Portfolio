import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full left-0 w-full bg-blue-300 shadow-md z-50">
      <a href="#" className="flex justify-center bg-blue-500 py-3">Back to Top</a>
      <div className="max-w-6xl mx-auto  flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <a href="/" className="text-3xl">
            Taiki Takamatsuの部屋
          </a>
          <div className="mt-2">
            SOCAIL
            <div className="w-100 border-t" >
              <a
                href="https://github.com/Taiki-Takamatsu"
              >
                <FaGithub size={40} />
              </a>
            </div>
          </div>
          <p className="mt-10 text-gray-500">© 2026 髙松大暉</p>

        </div>
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <p className="text-3xl">
            MENU
          </p>
          <div className="border-t">
            <ul>
              <li className="mt-2">
                <a href="/">HOME</a>
              </li>
              <li className="mt-2">
                <a href="/portfolio">PORTFOLIO</a>
              </li>
              <li className="mt-2">
                <a href="/study">STUDY</a>
              </li>
              <li className="mt-2">
                <a href="/contact">CONTACT</a>
              </li>
            </ul>

          </div>

        </div>
      </div>
    </footer>
  );
}
