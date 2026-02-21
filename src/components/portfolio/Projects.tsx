import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce app with real-time inventory, Stripe payments, and an admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    link: "#",
    github: "#",
  },
  {
    title: "AI Chat Application",
    description: "An intelligent conversational interface powered by LLMs with context-aware responses and memory.",
    tags: ["Next.js", "OpenAI", "TypeScript", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    title: "Task Management Tool",
    description: "A collaborative project management app with drag-and-drop boards, real-time updates, and team chat.",
    tags: ["React", "Firebase", "Framer Motion"],
    link: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description: "This very portfolio — a modern, animated personal site built with React and Framer Motion.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#",
    github: "#",
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
              <Card className="h-full bg-card hover:border-primary/40 transition-colors group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold font-['Space_Grotesk'] group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <a href={project.github} className="text-muted-foreground hover:text-foreground transition-colors">
                        <Github size={16} />
                      </a>
                      <a href={project.link} className="text-muted-foreground hover:text-foreground transition-colors">
                        <ExternalLink size={16} />
                      </a>
                    </div>
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
