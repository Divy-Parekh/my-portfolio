import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import caffeeOsImg from "@/assets/caffee-os.jpg";
import gearguardImg from "@/assets/gearguard.jpg";
import resumeIntelImg from "@/assets/resume-intelligence.jpg";

const projects = [
  {
    title: "CaffeeOS — Café Point of Sale",
    description: "A complete point-of-sale system designed for coffee shops, featuring menu management, order tracking, and streamlined checkout workflows.",
    tags: ["React", "Node.js", "POS", "Full Stack"],
    github: "https://github.com/Divy-Parekh/CaffeeOS",
    image: caffeeOsImg,
  },
  {
    title: "GearGuard — Resource Management",
    description: "A resource management system for tracking equipment, inventory, and assets across teams with real-time analytics and reporting dashboards.",
    tags: ["React", "MERN Stack", "Dashboard", "Analytics"],
    github: "https://github.com/Divy-Parekh/GearGuard",
    image: gearguardImg,
  },
  {
    title: "Resume Intelligence Platform",
    description: "An AI-powered resume analysis platform that intelligently parses, scores, and provides actionable feedback on resumes to improve hiring outcomes.",
    tags: ["AI", "React", "TypeScript", "NLP"],
    github: "https://github.com/Divy-Parekh/rip1",
    image: resumeIntelImg,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-2">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-['Space_Grotesk']">
            Featured Work
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full bg-card hover:border-primary/40 transition-colors group overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold font-['Space_Grotesk'] group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                      <Github size={18} />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs font-normal rounded-md">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
