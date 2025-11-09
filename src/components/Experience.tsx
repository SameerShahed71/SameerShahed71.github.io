import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import compSciLogo from 'figma:asset/6d35fa2b8e175585c57f9436e032934ebb48473f.png';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Department of Computer Science, University of Toronto',
    location: 'Toronto, Ontario, Canada',
    locationType: 'On-site',
    startDate: 'Sep 2025',
    endDate: 'Present',
    description: 'Building a platform connecting students, teachers, and industry partners to streamline collaboration and project-based learning.',
    logo: compSciLogo,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building impactful software solutions in academic and professional settings
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-card/30 backdrop-blur-sm border-border hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex gap-4">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded overflow-hidden flex items-center justify-center">
                      <img
                        src={experience.logo}
                        alt={experience.company}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="mb-1">{experience.title}</h3>
                    <p className="text-muted-foreground mb-2">{experience.company}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {experience.startDate} - {experience.endDate}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>
                          {experience.location} · {experience.locationType}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground">{experience.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
