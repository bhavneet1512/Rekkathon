"use client"

import { Brain, Cpu, Wifi, Link2, Building2, Cloud } from "lucide-react"
import { motion } from "framer-motion"

const tracks = [
  {
    icon: Brain,
    title: "AI / ML",
    description: "Machine learning models, computer vision, NLP, and intelligent systems",
    color: "primary",
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    description: "Microcontrollers, firmware development, and real-time systems",
    color: "accent",
  },
  {
    icon: Wifi,
    title: "Hardware & IoT",
    description: "Connected devices, sensors, automation, and smart solutions",
    color: "primary",
  },
  {
    icon: Link2,
    title: "Blockchain & Web3",
    description: "Decentralized applications, smart contracts, and crypto solutions",
    color: "accent",
  },
  {
    icon: Building2,
    title: "Sponsor Tracks",
    description: "Special problem statements from our industry partners",
    color: "primary",
  },
  {
    icon: Cloud,
    title: "SAAS",
    description: "Build scalable, cloud-based software solutions that solve real-world problems with clean UI, secure backend, and smart automation.",
    color: "primary",
  },
]

export function TracksSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  }
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
  const cardVariants = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }, hover: { y: -10, scale: 1.02, transition: { duration: 0.3 } } }
  return (
    <section id="tracks" className="relative py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ amount: 0.3 }}>
          <motion.h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-4" variants={itemVariants}>Tracks</motion.h2>
          <motion.h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6" variants={itemVariants}>Choose Your <span className="text-accent">Domain</span></motion.h3>
          <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={itemVariants}>Explore diverse tracks designed to challenge your skills and spark innovation</motion.p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
          {tracks.map((track, index) => (
            <motion.div key={index} className={`group relative p-8 bg-card border border-border rounded-xl hover:border-${track.color}/50 transition-all duration-300 ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`} variants={cardVariants} whileHover="hover">
              <div className={`absolute inset-0 bg-${track.color}/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative">
                <motion.div className={`w-14 h-14 rounded-xl bg-${track.color}/10 flex items-center justify-center mb-6 group-hover:bg-${track.color}/20 transition-colors`} whileHover={{ scale: 1.15, rotate: 5 }}>
                  <track.icon className={`w-7 h-7 text-${track.color}`} />
                </motion.div>
                <h4 className="text-xl font-semibold text-foreground mb-3">{track.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{track.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
