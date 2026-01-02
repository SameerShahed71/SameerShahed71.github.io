import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';
import codeFillImage from 'figma:asset/c611ddae7b39d1ff3763e7b01734955bc081f732.png';
import stockFlowImage from 'figma:asset/cc22dec3dbccc9491042eb62b90100157878fcf6.png';
import drMarioImage from 'figma:asset/0a5c4d891e19364f502e3151ea41c10cec396414.png';
import flashmindImage from '../assets/FlashMind.png';
import NxtMovieImage from '../assets/NxtMovie.png';
import { Description } from '@radix-ui/react-dialog';

const projects = [
  {
    title: 'CodeFill',
    description: 'Chrome extension to extract OTP codes from Gmail in one-click, cutting verification time by 50%. Reached 50+ downloads with strong feedback by launching on the Chrome Web Store.',
    image: codeFillImage,
    tags: ['TypeScript', 'Express.js', 'Node.js', 'Vue', 'OAuth2'],
    githubUrl: 'https://github.com/SameerShahed71/CodeFill',
    liveUrl: 'https://www.youtube.com/watch?v=Ga23S7SH4Hs',
  },
  {
    title: 'NxtMovie',
    description: 'Recommender system using graph similarity and scikit-learn\'s cosine similarity to generate tailored movie suggestions. Deployed MongoDB database to manage 10K+ movies and user profiles.',
    image: NxtMovieImage,
    tags: ['Python', 'Scikit-learn', 'Pandas', 'MongoDB'],
    githubUrl: 'https://github.com/SameerShahed71/NxtMovie',
    liveUrl: 'https://www.youtube.com/watch?v=BfWAH9884qQ',
  },
  {
    title: 'StockFlow',
    description: 'Full-stack stock trading simulator with real-time data, charting, and trade execution. Integrated AI-powered financial assistant delivering tailored insights and stock analysis. Designed scalable Spring Boot services with Redis caching, handling 1k+ concurrent simulated trades.',
    image: stockFlowImage,
    tags: ['Java', 'Firebase', 'Spring Boot', 'REST APIs'],
    githubUrl: 'https://github.com/SameerShahed71/StockFlow',
    liveUrl: "https://www.youtube.com/watch?v=ANHe6UrRnsY"
  },
  {
    title: 'FlashMind',
    description: 'AI-powered flashcard generator that transforms lecture PDFs or pasted notes into study-ready Q&A cards. Built a Vite + React frontend with drag-and-drop uploads and responsive card grid, plus an Express backend that extracts PDF text and calls Gemini for generation.',
    image: flashmindImage,
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'Gemini API'],
    githubUrl: 'https://github.com/SameerShahed71/FlashMind',
  },
  {
    title: 'Dr Mario Assembly Game',
    description: 'Dr Mario-inspired game using MIPS Assembly and Memory-Mapped I/O, enabling real-time gameplay with keyboard input. Implemented collision detection and game logic via grid-based memory and bitwise ops, reducing overhead by 30%. Designed bitmap display system for smooth animations.',
    image: drMarioImage,
    tags: ['MIPS Assembly', 'Memory-Mapped I/O'],
    githubUrl: 'https://github.com/umairx25/Dr-Mario',
    liveUrl: "https://www.youtube.com/watch?v=GvxgCYxuhFM"
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of personal and academic projects showcasing systems programming, AI/ML, and full-stack development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
