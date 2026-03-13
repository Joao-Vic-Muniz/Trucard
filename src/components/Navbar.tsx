import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "home" },
    { name: "Regras", href: "regras" },
    { name: "Truco Paulista", href: "paulista" },
    { name: "Truco Mineiro", href: "mineiro" },
    { name: "Sinais", href: "sinais" },
  ];

function scrollToSection(id: string) {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  setOpen(false);
}

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 w-full h-16 z-50 border-b border-white/[0.07] bg-[#080810]/90 backdrop-blur-xl shadow-[0_1px_40px_rgba(0,0,0,0.5)]"
      >
        <div className="relative w-full h-full px-4 md:px-8 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-0.5"
          >
            <span className="font-title text-2xl tracking-wide text-title">
              Tru
            </span>
            <span className="font-title text-2xl tracking-wide text-accent">
              card
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-70 ml-1 mt-1" />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 font-text">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="relative px-3 py-1.5 text-[14px] tracking-wide rounded-lg text-text/80 hover:text-title hover:bg-white/5 transition-all duration-300"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
          >
            <span className="block w-full h-px rounded-full bg-title" />
            <span className="block w-3/5 h-px rounded-full bg-title ml-auto" />
            <span className="block w-full h-px rounded-full bg-title" />
          </button>

        </div>
      </motion.header>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-4/5 max-w-xs z-50 flex flex-col bg-[#100e1c]"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
              <span className="font-title text-xl text-title">
                Tru<span className="text-accent">card</span>
              </span>

              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            <nav className="flex flex-col p-4 gap-2">
              {links.map((link, i) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-left px-4 py-3 rounded-xl text-text/80 hover:text-title hover:bg-accent/10"
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}