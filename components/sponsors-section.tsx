"use client"

import { motion } from "framer-motion"

const titleSponsor = {
  name: "Title Sponsor",
  placeholder: "Your Logo Here",
}

const trackSponsors = [
  { name: "Track Sponsor 1", placeholder: "Sponsor Logo" },
  { name: "Track Sponsor 2", placeholder: "Sponsor Logo" },
  { name: "Track Sponsor 3", placeholder: "Sponsor Logo" },
]

const communityPartners = [
  { name: "Partner 1", placeholder: "Partner Logo" },
  { name: "Partner 2", placeholder: "Partner Logo" },
  { name: "Partner 3", placeholder: "Partner Logo" },
  { name: "Partner 4", placeholder: "Partner Logo" },
]

export function SponsorsSection() {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
  const cardVariants = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }, hover: { scale: 1.05, transition: { duration: 0.3 } } }
  return (
    <section id="sponsors" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ amount: 0.3 }}>
          <motion.h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4" variants={itemVariants}>Partners</motion.h2>
          <motion.h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6" variants={itemVariants}>
            Our <span className="text-primary">Sponsors</span>
          </motion.h3>
          <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={itemVariants}>
            Backed by industry leaders who believe in fostering innovation
          </motion.p>
        </motion.div>

        <motion.div className="mb-16" initial="hidden" whileInView="visible" variants={itemVariants} viewport={{}}>
          <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-widest text-center mb-6">Title Sponsor</h4>
          <div className="flex justify-center">
            <motion.div className="w-64 h-32 bg-card border-2 border-primary/30 rounded-xl flex items-center justify-center hover:border-primary transition-colors" variants={cardVariants} whileHover="hover">
              <span className="text-primary font-semibold text-sm">Coming Soon</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="mb-16" initial="hidden" whileInView="visible" variants={containerVariants} viewport={{}}>
          <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-widest text-center mb-6">Track Sponsors</h4>
          <div className="flex flex-wrap justify-center gap-6">
            {trackSponsors.map((sponsor, index) => (
              <motion.div key={index} className="w-48 h-24 bg-card border border-border rounded-xl flex items-center justify-center hover:border-accent/50 transition-colors" variants={cardVariants} whileHover="hover">
                <span className="text-primary font-semibold text-xs">Coming Soon</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{}}>
          <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-widest text-center mb-6">Community Partners</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {communityPartners.map((partner, index) => (
              <motion.div key={index} className="w-36 h-20 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/30 transition-colors" variants={cardVariants} whileHover="hover">
                <span className="text-primary font-semibold text-xs">Coming Soon</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="text-center mt-16" initial="hidden" whileInView="visible" variants={itemVariants} viewport={{}}>
          <p className="text-muted-foreground mb-4">Interested in sponsoring REKKATHON?</p>
          <a href="mailto:vibhav.nimbus@nith.ac.in" className="text-primary hover:underline font-medium">
            Get in touch →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
