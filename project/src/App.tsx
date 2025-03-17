import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar, Hero, About, Skills, Certificates, Experience, Projects, Contact } from './components';
import { StarsCanvas } from './components/canvas';

const App = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative z-0 bg-primary">
      {!isMobile && (
        <>
          <motion.div
            ref={cursorDotRef}
            className="cursor-dot"
            animate={{ x: mousePosition.x, y: mousePosition.y }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
          <motion.div
            ref={cursorOutlineRef}
            className="cursor-outline"
            animate={{ x: mousePosition.x, y: mousePosition.y, scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 150, damping: 20 }}
          />
        </>
      )}

      <div className="relative z-0">
        <motion.div
          className="bg-hero-pattern bg-cover bg-no-repeat bg-center absolute inset-0 opacity-10 z-[-2]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <Navbar />
        <Hero />
      </div>

      <About />
      <Skills />
      <Certificates />
      <Experience />
      <div className="relative z-0">
        <Projects />
        <StarsCanvas />
      </div>
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default App;
