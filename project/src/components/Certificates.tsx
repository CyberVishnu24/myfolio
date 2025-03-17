import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { useInView } from "react-intersection-observer";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Advanced Robotics Certification",
    issuer: "International Robotics Association",
    date: "June 2023",
    description: "Comprehensive certification in advanced robotics programming and design principles.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "#"
  },
  {
    title: "Full-Stack Web Development",
    issuer: "Tech Academy Online",
    date: "March 2023",
    description: "Mastery of modern web development technologies including React, Node.js, and database management.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "#"
  },
  {
    title: "IoT Systems Design",
    issuer: "Smart Systems Institute",
    date: "November 2022",
    description: "Specialized training in designing and implementing Internet of Things systems for various applications.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "#"
  },
  {
    title: "Sustainable Engineering Practices",
    issuer: "Green Engineering Council",
    date: "August 2022",
    description: "Certification in environmentally sustainable engineering methodologies and materials.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "#"
  }
];

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  link: string;
}

const CertificateCard = ({ index, certificate }: { index: number; certificate: Certificate }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(50%-24px)]"
    >
      <Tilt
        options={{
          max: 15,
          scale: 1.05,
          speed: 450,
        }}
        className="bg-tertiary rounded-2xl overflow-hidden h-full"
      >
        <div className="relative w-full h-[200px] overflow-hidden">
          <img 
            src={certificate.image} 
            alt={certificate.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-tertiary via-transparent to-transparent"></div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center mb-3">
            <Award className="text-accent mr-2 h-5 w-5" />
            <h3 className="text-white text-xl font-bold">{certificate.title}</h3>
          </div>
          
          <div className="flex justify-between items-center mb-3">
            <p className="text-secondary text-sm">{certificate.issuer}</p>
            <p className="text-accent text-sm">{certificate.date}</p>
          </div>
          
          <p className="text-secondary mb-4">{certificate.description}</p>
          
          <a 
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent hover:text-white transition-colors duration-300"
          >
            View Certificate <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certificates" className="relative py-16 md:py-24">
      <div className="section-wrapper">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtext">My achievements</p>
          <h2 className="section-heading">Certificates.</h2>
        </motion.div>

        <div className="mt-16 flex flex-wrap gap-8 justify-center">
          {certificates.map((certificate, index) => (
            <CertificateCard 
              key={certificate.title}
              index={index}
              certificate={certificate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;