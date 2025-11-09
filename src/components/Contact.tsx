import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

interface ContactProps {
  onNavigate: (section: string) => void;
}

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/SameerShahed71',
    color: 'hover:text-white',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/sameershahed/',
    color: 'hover:text-blue-400',
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:shahed.sameer74@gmail.com',
    color: 'hover:text-cyan-400',
  },
];

export function Contact({ onNavigate }: ContactProps) {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Open to new opportunities, collaborations, and conversations about technology
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-8 mb-16"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`flex flex-col items-center gap-2 text-muted-foreground transition-colors ${link.color}`}
            >
              <div className="p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-cyan-500/50 transition-all">
                <link.icon className="w-6 h-6" />
              </div>
              <span>{link.name}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => onNavigate('hero')}
            className="border-cyan-500/50 hover:bg-cyan-500/10 hover:border-cyan-400"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 pt-8 border-t border-border text-center text-muted-foreground"
        >
          <p>© 2025 Sameer Shahed.</p>
        </motion.div>
      </div>
    </section>
  );
}
