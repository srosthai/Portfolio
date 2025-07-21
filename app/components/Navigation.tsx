import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import type { NavigationItem } from "@/app/types";

interface NavigationProps {
  items: NavigationItem[];
}

const Navigation = ({ items }: NavigationProps) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      <ul
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className="relative mx-auto flex w-fit rounded-full border-2 border-white/20 bg-black/50 backdrop-blur-md p-1"
      >
        {items.map((item) => (
          <Tab key={item.id} setPosition={setPosition} id={item.id}>
            {item.name}
          </Tab>
        ))}
        <Cursor position={position} />
      </ul>
    </nav>
  );
};

interface TabProps {
  children: React.ReactNode;
  setPosition: (position: { left: number; width: number; opacity: number }) => void;
  id: string;
}

const Tab = ({ children, setPosition, id }: TabProps) => {
  const ref = useRef<HTMLLIElement>(null);

  const handleClick = () => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={handleClick}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference whitespace-nowrap md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

interface CursorProps {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
}

const Cursor = ({ position }: CursorProps) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-white md:h-12"
    />
  );
};

export default Navigation; 