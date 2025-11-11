"use client";
import { motion, easeOut } from "framer-motion"; 
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";


const portfolioConfig = {
  personal: {
    name: "John Doe",
    title: "Visual Designer & Creative Thinker",
  },
};

export function Hero() {
  const { name, title } = portfolioConfig.personal;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 md:px-8 lg:px-16 pt-20 md:pt-32 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse at center, 
              rgba(147, 51, 234, 0.35) 0%,
              rgba(59, 130, 246, 0.28) 25%,
              rgba(14, 165, 233, 0.25) 50%,
              rgba(251, 146, 60, 0.3) 75%,
              rgba(236, 72, 153, 0.32) 100%
            )
          `,
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Parallax rays effect */}
      <motion.div
        className="absolute inset-0 z-0 opacity-50"
        style={{
          background: `
            repeating-conic-gradient(
              from 0deg at 50% 50%,
              transparent 0deg,
              rgba(147, 51, 234, 0.08) 2deg,
              transparent 4deg,
              rgba(59, 130, 246, 0.08) 6deg,
              transparent 8deg,
              rgba(251, 146, 60, 0.08) 10deg,
              transparent 12deg
            )
          `,
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/25 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-80 h-80 bg-orange-500/25 rounded-full blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main heading with gradient text */}
        <motion.h1
          variants={fadeInUp}
          className="text-7xl md:text-8xl lg:text-9xl font-serif font-light tracking-tight leading-tight text-foreground"
        >
          {name}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="mt-6 md:mt-8 text-lg md:text-xl text-muted-foreground font-light tracking-wide"
        >
          {title}
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={fadeInUp} className="mt-12 md:mt-16">
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-muted-foreground transition-all"
            onClick={() => {
              document.querySelector("#work")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            View Portfolio
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeInUp}
          className="mt-20 md:mt-24 flex justify-center"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>

      {/* Subtle background divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
}
