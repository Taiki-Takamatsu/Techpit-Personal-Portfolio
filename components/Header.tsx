'use client'
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full bg-blue-300 shadow-md z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="/" className="text-3xl font-bold text-gray-800">Taiki Takamatsuの部屋</a>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm font-medium">
              <li>
                <a href="/" className="hover:text-blue-600">HOME</a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-blue-600">PORTFOLIO</a>
              </li>
              <li>
                <a href="/study" className="hover:text-blue-600">STUDY</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-600">CONTACT</a>
              </li>
            </ul>
          </nav>

          <button
            className="md:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "×" : "☰"}
          </button>

          {
            isOpen && (
              <nav className="absolute top-full right-0 w-30 bg-blue-200 shadow-lg md:hidden">
                <ul className="flex flex-col p-4">
                  <li>
                    <a href="/" className="hover:text-blue-600">HOME</a>
                  </li>
                  <li>
                    <a href="/portfolio" className="hover:text-blue-600">PORTFOLIO</a>
                  </li>
                  <li>
                    <a href="/study" className="hover:text-blue-600">STUDY</a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:text-blue-600 block">CONTACT</a>
                  </li>
                </ul>
              </nav>
            )
          }
        </div>
      </div>
    </header>
  );
}
