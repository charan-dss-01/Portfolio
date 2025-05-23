"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

export const CardHoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    image?: string;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item.link}
          key={item.link + idx}
          className="relative group block p-2 h-full w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="relative z-20 h-full w-full overflow-hidden rounded-lg border border-transparent bg-neutral-950 p-4 group-hover:border-orange-500"
          >
            <div className="relative z-50">
              <div className="p-4">
                <h4 className="mt-4 text-xl font-bold text-neutral-200">
                  {item.title}
                </h4>
                <p className="mt-2 text-neutral-300">{item.description}</p>
              </div>
              {item.image && (
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              )}
            </div>
          </motion.div>
        </a>
      ))}
    </div>
  );
};
