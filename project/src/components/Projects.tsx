import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Smart Home Automation System",
    description: "Designed and implemented a smart home system using Arduino and Raspberry Pi that controls lighting, temperature, and security features.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["IoT", "Arduino", "Raspberry Pi", "Python"],
    source_code_link: "#",
    live_demo_link: "#",
  },
  {
    title: "Structural Analysis Application",
    description: "Developed a web application that performs structural analysis for civil engineering projects, calculating load distributions and stress points.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["JavaScript", "React", "Engineering", "Physics"],
    source_code_link: "#",
    live_demo_link: "#",
  },
  {
    title: "Renewable Energy Monitor",
    description: "Created a monitoring system that tracks energy production from solar panels and wind turbines, providing real-time analytics.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["Data Analysis", "IoT", "Embedded Systems"],
    source_code_link: "#",
    live_demo_link: "#",
  },
];

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  source_code_link: string;
  live_demo_link: string;
}

const ProjectCard = ({ index, project }: { index: number; project: Project }) => {
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
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="project-card p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="project-card-inner">
          <div className="relative w-full h-[230px]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 gap-2">
              <div
                onClick={() => window.open(project.source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <Github className="w-1/2 h-1/2 text-white" />
              </div>
              <div
                onClick={() => window.open(project.live_demo_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <ExternalLink className="w-1/2 h-1/2 text-white" />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{project.title}</h3>
            <p className="mt-2 text-secondary text-[14px]">{project.description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <p
                key={`${tag}-${tagIndex}`}
                className="text-[14px]"
                style={{ color: "#915EFF" }}
              >
                #{tag}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="relative py-16 md:py-24">
      <div className="section-wrapper">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtext">My work</p>
          <h2 className="section-heading">Projects.</h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            The following projects showcase my skills and experience through real-world examples of my work. 
            Each project is briefly described with links to code repositories and live demos. 
            They reflect my ability to solve complex problems, work with different technologies, 
            and manage projects effectively.
          </motion.p>
        </div>

        <div className="mt-20 flex flex-wrap gap-7 justify-center">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;