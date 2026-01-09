"use client"

import { Zap, Code, Wrench, Users } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Zap,
    title: "Hands-on Innovation",
    description: "Build real hardware and software solutions in 48 hours",
  },
  {
    icon: Code,
    title: "Real-world Problems",
    description: "Tackle challenges that matter with industry mentors",
  },
  {
    icon: Wrench,
    title: "Hardware + Software",
    description: "Unique integration of embedded systems and code",
  },
  {
    icon: Users,
    title: "National Level",
    description: "Compete with the best minds from across India",
  },
]

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -5,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <motion.h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4" variants={itemVariants}>
            About
          </motion.h2>
          <motion.h3
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            variants={itemVariants}
          >
            What is <span className="text-primary">REKKATHON</span>?
          </motion.h3>
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            REKKATHON is a national-level offline hackathon where innovators, developers, and makers come together to
            build groundbreaking solutions. This isn&apos;t just another coding competition — it&apos;s a fusion of
            hardware and software, pushing the boundaries of what&apos;s possible.
          </motion.p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <motion.div
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <feature.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
