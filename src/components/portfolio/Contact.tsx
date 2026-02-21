import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-2">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Space_Grotesk']">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
            Have a project in mind or just want to chat? I'd love to hear from you.
            Drop me a message and I'll get back to you as soon as I can.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 gap-2">
              <a href="mailto:divy@example.com">
                <Mail size={18} />
                Send an Email
                <ArrowUpRight size={16} />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 gap-2">
              <a href="https://linkedin.com/in/Divy-Parekh" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 gap-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github size={18} />
                GitHub
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
