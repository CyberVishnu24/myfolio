import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const heroHeight = window.innerHeight; // Height of first section

    // Only show navbar in first section or when scrolling up
    setIsVisible(currentScrollY <= heroHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  interface NavLink {
    name: string;
    href: string;
  }

  const navLinks: NavLink[] = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Certificates", href: "#certificates" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      e.preventDefault();
      if (isScrolling) return;

      const element = document.getElementById(sectionId);
      if (element) {
        setIsScrolling(true);
        const offset = 80;
        const offsetPosition = element.offsetTop - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        setActive(sectionId);
        setToggle(false);

        setTimeout(() => setIsScrolling(false), 1000);
      }
    },
    [isScrolling]
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-primary/95 backdrop-blur-md shadow-lg px-6 sm:px-16 py-5`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <a
            href="#home"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              if (!isScrolling) {
                setActive("home");
                setIsScrolling(true);
                window.scrollTo({ top: 0, behavior: "smooth" });
                setTimeout(() => setIsScrolling(false), 1000);
              }
            }}
          >
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xl">
              R
            </div>
            <p className="text-white text-[18px] font-bold cursor-pointer flex mr-8">
              Vishnu &nbsp;
              <span className="hidden lg:block">| Engineer & Cybersecurity Specialist</span>
            </p>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden sm:flex flex-row gap-10"
        >
          {navLinks.map((nav) => (
            <a
              key={nav.name}
              href={nav.href}
              className={`${
                active === nav.href.substring(1) ? "text-accent" : "text-white"
              } hover:text-accent text-[18px] font-medium cursor-pointer relative group transition-colors duration-300`}
              onClick={(e) => scrollToSection(e, nav.href.substring(1))}
            >
              {nav.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="flex items-center gap-1 text-white bg-accent px-4 py-2 rounded-full hover:bg-accent-700 transition-all duration-300"
          >
            Resume <Download className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="w-[28px] h-[28px] object-contain text-white"
            aria-label={toggle ? "Close menu" : "Open menu"}
          >
            {toggle ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;