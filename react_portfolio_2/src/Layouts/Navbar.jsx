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
    <header className="fixed top-0 left-0 right-0 z-[999] bg-white/70 backdrop-blur-md shadow-sm">
      <div className="md:container mx-auto px-5 py-3 flex items-center justify-between">
        <a href="#home" className="font-Poppins font-bold text-lg">
          {hero?.firstName} <span className="text-dark_primary">{hero?.LastName}</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item, i) => (
            <a
              key={i}
              href={item.link}
              onClick={() => handleClick(i)}
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors duration-200 hover:bg-slate-200/60 ${i === active ? "bg-dark_primary text-white" : "text-dark_primary"
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
          className="md:hidden p-2 rounded-lg bg-white/80 border border-slate-200"
        >
          {open ? <HiX size={22} /> : <HiMenuAlt2 size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-slate-200">
          <div className="px-5 py-3 flex flex-col">
            {nav.map((item, i) => (
              <a
                key={i}
                href={item.link}
                onClick={() => handleClick(i)}
                className={`flex items-center gap-3 px-3 py-3 rounded-md transition-colors duration-200 ${i === active ? "bg-dark_primary text-white" : "hover:bg-slate-200/60"
                  }`}
              >
                {createElement(item.icon)}
                <span className="font-Poppins">{getLabel(item.link)}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
