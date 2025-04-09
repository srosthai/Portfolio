import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

interface TiltCardProps {
  title: string;
  description: string;
  image: string;
  github: string;
  tags: string[];
}

const TiltCard = ({ title, description, image, github, tags }: TiltCardProps) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return [0, 0];

    const rect = (ref.current as HTMLElement).getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-[500px] w-full rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-neutral-900 shadow-lg overflow-hidden"
      >
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            style={{
              transform: "translateZ(50px)",
            }}
          />
        </div>
        <div className="p-6" style={{ transform: "translateZ(50px)" }}>
          <h4 className="text-xl font-semibold mb-2 text-white">{title}</h4>
          <p className="text-gray-400 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 bg-pink-500 bg-opacity-20 text-pink-500 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <Button
            variant="outline"
            className="gap-2 bg-white text-black hover:bg-pink-500 hover:text-white transition-colors"
            onClick={() => window.open(github, '_blank')}
          >
            View on GitHub
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default TiltCard; 