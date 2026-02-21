import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Developer",
    company: "Tech Company",
    period: "2023 — Present",
    description:
      "Building scalable web applications and leading frontend architecture decisions. Collaborating with cross-functional teams to deliver user-centric products.",
  },
  {
    role: "Junior Developer",
    company: "Startup Inc.",
    period: "2021 — 2023",
    description:
      "Developed and maintained multiple client-facing applications. Improved performance metrics by 40% through code optimization and modern tooling.",
  },
  {
    role: "Intern",
    company: "Digital Agency",
    period: "2020 — 2021",
    description:
      "Assisted in building responsive websites and gained hands-on experience with React, Node.js, and cloud deployment workflows.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-2">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-['Space_Grotesk']">
            Where I've Worked
          </h2>
        </motion.div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-0 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12 md:pl-10"
              >
                {/* Dot */}
                <div className="absolute left-2.5 md:left-[-5px] top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{exp.period}</p>
                <h3 className="text-xl font-semibold font-['Space_Grotesk']">{exp.role}</h3>
                <p className="text-primary text-sm mb-2">{exp.company}</p>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
