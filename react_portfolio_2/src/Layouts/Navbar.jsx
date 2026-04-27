import { useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav, hero } = content;
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const getLabel = (hash) => {
    if (!hash) return "";
    const s = hash.replace("#", "");
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const handleClick = (i) => {
    setActive(i);
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] bg-bg_light_primary/80 backdrop-blur-md shadow-sm border-b border-gray/20">
      <div className="md:container mx-auto px-5 py-3 flex items-center justify-between">
        <a href="#home" className="font-Poppins font-bold text-lg text-text_light">
          {hero?.firstName} <span className="text-dark_primary">{hero?.LastName}</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item, i) => (
            <a
              key={i}
              href={item.link}
              onClick={() => handleClick(i)}
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors duration-200 hover:bg-white/10 ${i === active ? "bg-dark_primary text-slate-900" : "text-text_light"
                }`}
            >
              {createElement(item.icon)}
              <span className="font-Poppins text-sm">{getLabel(item.link)}</span>
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg bg-white/5 border border-gray/20 text-text_light transition-colors duration-200 hover:bg-white/10 active:scale-95"
        >
          {open ? <HiX size={22} /> : <HiMenuAlt2 size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-bg_light_primary/95 backdrop-blur-md border-t border-gray/20 ${open ? "max-h-[500px] opacity-100 py-3" : "max-h-0 opacity-0 py-0"
        }`}>
        <div className="px-5 flex flex-col gap-1">
          {nav.map((item, i) => (
            <a
              key={i}
              href={item.link}
              onClick={() => handleClick(i)}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${i === active ? "bg-dark_primary text-slate-900 font-bold" : "hover:bg-white/10 text-text_light"
                }`}
            >
              <span className="text-xl">{createElement(item.icon)}</span>
              <span className="font-Poppins text-base">{getLabel(item.link)}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
