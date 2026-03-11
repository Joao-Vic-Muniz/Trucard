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
      <header className="fixed top-0 left-0 w-full h-16 z-50 border-b border-white/[0.07] bg-[#080810]/90 backdrop-blur-xl shadow-[0_1px_40px_rgba(0,0,0,0.5)]">
        <div className="relative w-full h-full px-4 md:px-8 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-0.5 group">
            <span className="font-title text-2xl tracking-wide text-title">
              Tru
            </span>
            <span className="font-title text-2xl tracking-wide text-accent">
              card
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-70 ml-1 mt-1" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 font-text">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3 py-1.5 text-[14px] tracking-wide rounded-lg text-text/80 hover:text-title hover:bg-white/5 transition-all duration-300 group"
              >
                {link.name}
                <span className="absolute bottom-0.5 left-3 right-3 h-px rounded-full bg-accent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
              </a>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
            aria-label="Abrir menu"
          >
            <span className="block w-full h-px rounded-full bg-title" />
            <span className="block w-3/5 h-px rounded-full bg-title ml-auto" />
            <span className="block w-full h-px rounded-full bg-title" />
          </button>

        </div>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs z-50 flex flex-col
          bg-[#100e1c] border-l border-white/[0.07] shadow-[-8px_0_60px_rgba(0,0,0,0.6)]
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
          <span className="font-title text-xl tracking-wide text-title">
            Tru<span className="text-accent">card</span>
          </span>
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-text bg-white/5 border border-white/[0.08] hover:border-accent/40 hover:text-accent transition-all duration-200"
            aria-label="Fechar menu"
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col p-4 gap-1 flex-1">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center px-4 py-3 rounded-xl font-text text-base text-text/80 hover:text-title hover:bg-accent/10 border-l-2 border-transparent hover:border-accent transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Drawer footer */}
        <div className="px-6 py-4 border-t border-white/[0.05]">
          <p className="font-text text-xs text-text/40">
            O melhor guia de Truco do Brasil
          </p>
        </div>
      </aside>
    </>
  );
}