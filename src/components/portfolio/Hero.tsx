import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Welcome to my portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 font-['Space_Grotesk']">
            Hi, I'm{" "}
            <span className="text-gradient">Divy Parekh</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            A passionate developer crafting elegant digital experiences.
            I turn ideas into impactful, user-centric solutions.
          </p>
          <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
            <Button asChild size="lg" className="rounded-full px-8">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8" onClick={() => {
              const w = window.open("/resume", "_blank");
              if (w) w.onload = () => w.print();
            }}>
              <Download size={18} className="mr-1" />
              Resume
            </Button>
          </div>
          <div className="flex items-center justify-center gap-5">
            <a href="https://linkedin.com/in/Divy-Parekh" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="mailto:divy@example.com"
              className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground animate-bounce block">
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
