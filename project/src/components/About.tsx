import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { Shield, Target, Search, Code } from "lucide-react";

const services = [
  {
    title: "Cybersecurity & Ethical Hacking",
    icon: <Shield className="w-16 h-16 text-white" />,
    description: "Vulnerability analysis and penetration testing using Kali Linux. Conducting footprinting with tools like DomainTools WHOIS, Netcraft, and Shodan."
  },
  {
    title: "Vulnerability Assessment & Penetration Testing",
    icon: <Target className="w-16 h-16 text-white" />,
    description: "Identify and analyze security weaknesses in web applications, networks, and systems. Perform ethical hacking to test and improve system security."
  },
  {
    title: "OSINT & Footprinting",
    icon: <Search className="w-16 h-16 text-white" />,
    description: "Conduct Open-Source Intelligence (OSINT) investigations. Use tools like DomainTools WHOIS, Netcraft, and Shodan to gather critical data."
  },
  {
    title: "Web Development (Basic)",
    icon: <Code className="w-16 h-16 text-white" />,
    description: "Building responsive and interactive web applications using modern frameworks and technologies."
  },
];

interface ServiceCardProps {
  index: number;
  title: string;
  icon: React.ReactNode;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon, description }: ServiceCardProps) => (
  <Tilt
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="service-card"
    >
      <div className="rounded-full flex justify-center items-center w-20 h-20 mb-5 bg-tertiary">
        {icon}
      </div>

      <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      <p className="mt-2 text-secondary text-[14px] text-center">{description}</p>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section id="about" className="relative bg-primary py-16 md:py-24">
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="section-subtext">Introduction</p>
          <h2 className="section-heading">Overview.</h2>
        </motion.div>

        <div className="mt-10 md:flex md:items-start md:space-x-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <p className="text-secondary text-[17px] max-w-3xl leading-[30px]">
              Hey there, my name is G Reddy Vishnu Vardhan, and I'm studying cybersecurity BTech final year at Alliance University. I hope my portfolio website is attracting good enough. My journey in engineering began with a curiosity about learning technology. In the upcoming sections, you can see my achievements.
            </p>
            <div className="mt-6">
              <a href="mailto:reddyvishnuv75@gmail.com" className="btn btn-primary inline-block">
                Let's Work Together
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2 relative"
          >
            <img
              src="https://images.unsplash.com/photo-1581092921461-39b9d317e73c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Portrait"
              className="rounded-lg shadow-2xl object-cover w-full h-[400px] transform rotate-3 hover:rotate-0 transition-transform duration-500"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-accent/20 backdrop-blur-sm z-[-1] animate-pulse-slow"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-accent/20 backdrop-blur-sm z-[-1] animate-float"></div>
          </motion.div>
        </div>

        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-white text-[28px] font-bold text-center mb-10"
          >
            My Services
          </motion.h3>
          
          <div className="mt-10 flex flex-wrap gap-10 justify-center">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;