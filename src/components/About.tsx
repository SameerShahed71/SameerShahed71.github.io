import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-cyan-500/50">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1573497620166-aef748c8c792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjYxODQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Sameer Shahed"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2"
            >
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a Computer Science student at the University of Toronto with a passion for building
                  scalable, data-driven systems that solve real-world problems. My work spans the full stack—from
                  optimizing low-level system performance to crafting intuitive user experiences.
                </p>
                <p>
                  My academic journey has given me deep exposure to systems programming, computer architecture,
                  and machine learning. I've worked on projects ranging from CPU simulators using gem5 to
                  neural network optimization with custom CUDA kernels.
                </p>
                <p>
                  When I'm not coding, I'm exploring new technologies, contributing to open source, or diving
                  into research papers on distributed systems and AI. I believe in writing clean, maintainable
                  code and building software that makes a meaningful impact.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <div className="flex items-center gap-2 text-cyan-400">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span>Open to opportunities</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>📍 Toronto, ON</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
