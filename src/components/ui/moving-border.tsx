"use client";
import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "relative h-16 w-40 overflow-hidden bg-transparent p-[1px] text-xl",
        containerClassName,
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx={30} ry={30}>
          <div
            className={cn(
              "h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.8]",
              borderClassName,
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl",
          className,
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 2000,
  rx = 0,
  ry = 0,
  borderWidth = 2,
  className,
  ...otherProps
}: {
  children?: React.ReactNode;
  duration?: number;
  rx?: number;
  ry?: number;
  borderWidth?: number;
  className?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    if (!pathRef.current) return;
    const length = pathRef.current.getTotalLength();
    const dashLength = length / 2;
    const dashOffset = length / 2;
    const dashArray = `${dashLength} ${dashOffset}`;
    pathRef.current.setAttribute("stroke-dasharray", dashArray);
    pathRef.current.setAttribute("stroke-dashoffset", `${progress.get() * length}`);
  });

  return (
    <div
      className={cn(
        "relative flex items-center justify-center",
        className
      )}
      {...otherProps}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        style={{
          filter: "blur(8px)",
        }}
      >
        <motion.path
          ref={pathRef}
          d={`M ${rx} ${ry} L ${100 - rx} ${ry} L ${100 - rx} ${100 - ry} L ${rx} ${100 - ry} Z`}
          stroke="url(#gradient)"
          strokeWidth={borderWidth}
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: duration / 1000, ease: "linear" }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(249, 129, 47)" />
            <stop offset="100%" stopColor="rgb(249, 129, 47)" />
          </linearGradient>
        </defs>
      </svg>
      {children}
    </div>
  );
};
