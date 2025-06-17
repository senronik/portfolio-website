"use client"
import { cn } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ServiceCard from '../Services/ServiceCard'; // Import your ServiceCard
import Image from 'next/image';

interface ServiceItem {
  icon: string;
  title: string;
  shortDescription: string;
}

export const HoverEffect = ({
  items,
  className,
}: {
  items: ServiceItem[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="relative z-20 h-full">
            <ServiceCard
              icon={item.icon}
              title={item.title}
              shortDescription={item.shortDescription}
            />
          </div>
        </div>
      ))}
    </div>
  );
};