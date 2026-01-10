"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  const scrollVariants = {
    animate: {
      y: [0, 10, 0],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Hero content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Glowing chip icon */}
        <motion.div
          className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-card border border-border mb-8 animate-float"
          variants={iconVariants}
          whileHover="hover"
        >
          <Cpu className="w-10 h-10 text-primary" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-4 text-foreground"
          variants={itemVariants}
        >
          REKKATHON
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl sm:text-2xl text-muted-foreground mb-4"
          variants={itemVariants}
        >
          Offline Hardware + Software Hackathon
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="text-2xl sm:text-3xl font-semibold text-foreground mb-2"
          variants={itemVariants}
        >
          Build. Break. Innovate.
        </motion.p>

        {/* Organizer */}
        <motion.p
          className="text-sm text-muted-foreground mb-12"
          variants={itemVariants}
        >
          <span className="text-primary">Team Vibhav</span> | NIT Hamirpur
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={itemVariants}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div
                className="apply-button"
                data-hackathon-slug="rekkathon"
                data-button-theme="dark-inverted"
                style="height: 44px; width: 312px"
              ></div>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6 bg-transparent"
            >
              <a href="#timeline">View Timeline</a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate="animate"
        variants={scrollVariants}
      >
        <a href="#about" aria-label="Scroll to about section">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </a>
      </motion.div>

      {/* Decorative elements */}
      {/* <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-accent/20 rounded-full" />
      <div className="absolute top-1/3 right-20 w-16 h-16 border border-primary/30 rotate-45" /> */}
    </section>
  );
}
