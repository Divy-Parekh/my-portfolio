import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-2">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-['Space_Grotesk']">
            Building the future, one line at a time
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Divy Parekh — a developer who thrives at the intersection of design and technology.
                I believe great software isn't just functional; it's intuitive, beautiful, and meaningful.
              </p>
              <p>
                With a strong foundation in modern web technologies and a keen eye for detail,
                I build applications that solve real problems and delight users.
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                projects, or brainstorming the next big idea.
              </p>
              <p>
                I'm always open to exciting opportunities and collaborations.
                Let's build something amazing together.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
