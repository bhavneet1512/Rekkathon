"use client"

import { Trophy, Medal, Award, Gift } from "lucide-react"
import { motion } from "framer-motion"

const prizes = [
  {
    icon: Trophy,
    title: "Winner",
    amount: "₹50,000",
    color: "primary",
    perks: ["Cash Prize", "Internship Opportunities", "Premium Swag Kit"],
  },
  {
    icon: Medal,
    title: "First Runner-up",
    amount: "₹30,000",
    color: "accent",
    perks: ["Cash Prize", "Mentorship Sessions", "Swag Kit"],
  },
  {
    icon: Award,
    title: "Second Runner-up",
    amount: "₹20,000",
    color: "primary",
    perks: ["Cash Prize", "Course Vouchers", "Swag Kit"],
  },
  {
    icon: Gift,
    title: "Track Prizes",
    amount: "₹10,000",
    color: "accent",
    perks: ["Per Track Winner", "Certificates", "Special Goodies"],
  },
]

export function PrizesSection() {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
  const cardVariants = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }, hover: { y: -8, scale: 1.05, transition: { duration: 0.3 } } }
  const poolVariants = { hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.3 } } }
  return (
    <section id="prizes" className="relative py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ amount: 0.3 }}>
          <motion.h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-4" variants={itemVariants}>Prizes</motion.h2>
          <motion.h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6" variants={itemVariants}>Rewards & <span className="text-accent">Recognition</span></motion.h3>
          <motion.div className="inline-block p-6 bg-card border border-primary rounded-2xl mb-8" variants={poolVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={{ scale: 1.05 }}>
            <p className="text-sm text-muted-foreground mb-2">Total Prize Pool</p>
            <p className="text-4xl sm:text-5xl font-bold text-primary">₹1,50,000+</p>
          </motion.div>
          <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={itemVariants}>Win amazing prizes, certificates, mentorship opportunities, and exclusive swag</motion.p>
        </motion.div>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
          {prizes.map((prize, index) => (
            <motion.div key={index} className="group relative p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 text-center" variants={cardVariants} whileHover="hover">
              <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <motion.div className={`w-16 h-16 mx-auto rounded-full bg-${prize.color}/10 flex items-center justify-center mb-4 group-hover:bg-${prize.color}/20 transition-colors`} whileHover={{ scale: 1.2, rotate: 10 }}>
                  <prize.icon className={`w-8 h-8 text-${prize.color}`} />
                </motion.div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{prize.title}</h4>
                <p className={`text-2xl font-bold text-${prize.color} mb-4`}>{prize.amount}</p>
                <ul className="space-y-2">
                  {prize.perks.map((perk, perkIndex) => (
                    <li key={perkIndex} className="text-sm text-muted-foreground">{perk}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
