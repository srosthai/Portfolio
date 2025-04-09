import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  tags: string[];
}

interface CardProps {
  project: Project;
}

const Card = ({ project }: CardProps) => {
  return (
    <div
      key={project.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <div className="bg-gradient-to-br from-white/20 to-white/0 p-8 backdrop-blur-lg">
          <p className="text-4xl font-black uppercase text-white mb-4">
            {project.title}
          </p>
          <p className="text-white text-lg mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/20 text-white rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-white/20 text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

interface HorizontalScrollCarouselProps {
  projects: Project[];
}

const HorizontalScrollCarousel = ({ projects }: HorizontalScrollCarouselProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel; 