import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { ComputersCanvas } from "./canvas";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="home" className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat opacity-10 z-[-2]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary z-[-1]" />
        <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent z-[-1]" />
      </div>
      
      <div className="section-wrapper h-full flex flex-col justify-center sm:px-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-start">
          <div className="flex flex-row items-center gap-5">
            <div className="flex flex-col justify-center items-center mt-5">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-5 h-5 rounded-full bg-accent shadow-neon"
              />
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "80px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-1 sm:h-80 h-40 bg-gradient-to-b from-accent to-transparent"
              />
            </div>

            <div>
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="section-heading text-white relative"
              >
                Hi, I'm <span className="gradient-text" data-text="Reddy Vishnu">Reddy Vishnu</span>
                <div className="absolute -inset-1 bg-accent/20 blur-2xl z-[-1] animate-pulse-slow" />
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white text-[18px] mt-2 max-w-3xl leading-[30px] relative"
              >
                I'm an engineering student and cybersecurity enthusiast specializing in developing secure and innovative solutions to modern digital threats. My expertise spans ethical hacking, network security, and software development.
                <div className="absolute -inset-1 bg-accent/10 blur-xl z-[-1]" />
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <a
                  href="mailto:reddyvishnuv75@gmail.com"
                  className="btn btn-primary flex items-center gap-2 group relative overflow-hidden"
                >
                  <span className="relative z-10">Let's Work Together</span>
                  <ChevronRight className="h-5 w-5 relative z-10 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/reddy-vishnu-vardhan-611016322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="btn btn-outline group relative overflow-hidden"
                >
                  <span className="relative z-10">Let's Connect</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about" className="group">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-accent/50 flex justify-center items-start p-2 group-hover:border-accent transition-colors duration-300">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-accent mb-1 group-hover:shadow-neon transition-all duration-300"
            />
          </div>
        </a>
      </div>

      {isLoaded && (
        <div className="absolute bottom-0 w-full h-[500px] z-[-1]">
          <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent z-10 pointer-events-none" />
          <ComputersCanvas />
        </div>
      )}
    </section>
  );
};

export default Hero;