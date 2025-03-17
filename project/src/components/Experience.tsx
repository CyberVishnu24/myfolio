import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Briefcase, GraduationCap } from "lucide-react";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    title: "Engineering Intern",
    company: "Tech Innovations Inc.",
    date: "Summer 2023",
    description: "Assisted in the development of prototype testing procedures and collaborated with the R&D team on new product designs.",
    icon: <Briefcase className="w-full h-full text-white p-1" />,
    iconBg: "#383E56",
    points: [
      "Developed and implemented testing protocols for new product prototypes",
      "Collaborated with senior engineers on design improvements",
      "Created technical documentation for internal use",
      "Participated in weekly design review meetings"
    ]
  },
  {
    title: "Research Assistant",
    company: "University Research Lab",
    date: "2022 - Present",
    description: "Conducting research on sustainable materials for engineering applications. Published two papers in peer-reviewed journals.",
    icon: <Briefcase className="w-full h-full text-white p-1" />,
    iconBg: "#E6DEDD",
    points: [
      "Led research on eco-friendly composite materials for structural applications",
      "Co-authored two research papers published in peer-reviewed journals",
      "Developed testing methodologies for material strength and durability",
      "Presented findings at the annual engineering conference"
    ]
  },
  {
    title: "Bachelor of Science in Mechanical Engineering",
    company: "University of Engineering",
    date: "2020 - 2024",
    description: "Specialized in robotics and automation systems. Participated in the university robotics team and won the regional competition.",
    icon: <GraduationCap className="w-full h-full text-white p-1" />,
    iconBg: "#383E56",
    points: [
      "Specialized in robotics and automation systems",
      "Maintained a 3.8 GPA throughout the program",
      "Led the university robotics team to victory in regional competition",
      "Completed capstone project on autonomous delivery robots"
    ]
  },
  {
    title: "Associate Degree in Computer Science",
    company: "Tech Community College",
    date: "2018 - 2020",
    description: "Focused on programming fundamentals and software development. Graduated with honors.",
    icon: <GraduationCap className="w-full h-full text-white p-1" />,
    iconBg: "#E6DEDD",
    points: [
      "Focused on programming fundamentals and software development",
      "Graduated with honors (4.0 GPA)",
      "Developed a campus navigation app as final project",
      "Received outstanding student award in computer science"
    ]
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="relative py-16 md:py-24 bg-black-100">
      <div className="section-wrapper">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtext">What I have done so far</p>
          <h2 className="section-heading">Experience & Education.</h2>
        </motion.div>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline lineColor="#915EFF">
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                contentStyle={{
                  background: "#1d1836",
                  color: "#fff",
                }}
                contentArrowStyle={{ borderRight: "7px solid #232631" }}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={experience.icon}
                visible={inView}
              >
                <div>
                  <h3 className="text-white text-xl font-bold">{experience.title}</h3>
                  <p className="text-secondary text-base font-semibold" style={{ margin: 0 }}>
                    {experience.company}
                  </p>
                </div>

                <ul className="mt-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, pointIndex) => (
                    <li
                      key={`experience-point-${index}-${pointIndex}`}
                      className="text-white-100 text-sm pl-1 tracking-wider"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Experience;