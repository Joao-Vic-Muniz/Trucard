import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Regras", href: "#regras" },
    { name: "Truco Paulista", href: "#paulista" },
    { name: "Truco Mineiro", href: "#mineiro" },
    { name: "Sinais", href: "#sinais" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-16 bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="w-full h-full px-4 md:px-8 flex items-center justify-between">

          <h1 className="font-title text-title text-2xl tracking-wide">
            Trucard
          </h1>

          <nav className="hidden md:flex items-center gap-12 font-text">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-2 py-1 text-text text-[15px] tracking-wide transition duration-300 group"
              >
                <span className="group-hover:text-accent transition-colors duration-300">
                  {link.name}
                </span>

                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

          </nav>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-3xl text-title"
          >
            ☰
          </button>

        </div>
      </header>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-full bg-card transform transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "translate-x-full"}
        flex flex-col p-8`}
      >
        <button
          onClick={() => setOpen(false)}
          className="self-end text-3xl text-title mb-12"
        >
          ✕
        </button>

        <nav className="flex flex-col gap-8 text-2xl font-title text-title">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-accent transition"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}