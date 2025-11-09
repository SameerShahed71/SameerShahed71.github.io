import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Code2, Server, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['C/C++', 'Python', 'JavaScript', 'TypeScript', 'Java', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Server,
    skills: ['React.js', 'React Native', 'Node.js', 'Express.js', 'Vue.js', 'Scikit-learn', 'Pandas'],
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    skills: ['Git', 'Docker', 'Jenkins', 'Firebase', 'MongoDB', 'PostgreSQL', 'OAuth2', 'JWT'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Diverse toolkit spanning modern web technologies, backend systems, and low-level programming
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <category.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                    >
                      <Badge
                        variant="secondary"
                        className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-foreground border border-cyan-500/30 hover:border-cyan-400/50 hover:from-cyan-500/20 hover:to-blue-500/20 transition-all"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
