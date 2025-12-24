
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled
        ? "bg-black/60 backdrop-blur-md border-b border-white/10"
        : "bg-black"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LEFT LINKS */}
        <div className="flex gap-8 text-white text-sm font-medium">
          <a href="#skills" className="hover:text-gray-300 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-gray-300 transition">
            Projects
          </a>
          <a href="#social" className="hover:text-gray-300 transition">
            Social
          </a>
        </div>

        {/* RIGHT BUTTON */}
        <a
          href="/resume.pdf"
          download
          className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition"
        >
          Download Resume
        </a>
      </div>
    </nav>
  );
}
