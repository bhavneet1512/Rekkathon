"use client"

import { CheckCircle2, Circle } from "lucide-react"
import { motion } from "framer-motion"

const timelineEvents = [
  {
    title: "Registrations Open",
    description: "Sign up on Devfolio and form your team",
    date: "January 15, 2025",
    status: "completed",
  },
  {
    title: "Idea Submission",
    description: "Submit your innovative project ideas",
    date: "February 1, 2025",
    status: "upcoming",
  },
  {
    title: "Shortlisting",
    description: "Selected teams announced for the hackathon",
    date: "February 15, 2025",
    status: "upcoming",
  },
  {
    title: "Day 1: Kickoff + Build",
    description: "Opening ceremony, team onboarding, and start building",
    date: "March 1, 2025",
    status: "upcoming",
  },
  {
    title: "Day 2: Build + Mentorship",
    description: "Continue building with expert mentor sessions",
    date: "March 2, 2025",
    status: "upcoming",
  },
  {
    title: "Day 3: Presentations + Results",
    description: "Final pitches, judging, and winner announcements",
    date: "March 3, 2025",
    status: "upcoming",
  },
]

export function TimelineSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="timeline" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          variants={headerVariants}
          viewport={{ amount: 0.3 }}
        >
          <motion.h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4" variants={itemVariants}>
            Timeline
          </motion.h2>
          <motion.h3
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            variants={itemVariants}
          >
            Event <span className="text-primary">Schedule</span>
          </motion.h3>
          <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={itemVariants}>
            Mark your calendars and prepare for an amazing hackathon experience
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ amount: 0.2 }}
        >
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          {/* Timeline events */}
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                className={`relative flex items-start gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                variants={itemVariants}
              >
                {/* Content */}
                <motion.div
                  className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="text-lg font-semibold text-foreground">{event.title}</h4>
                      <span className="text-xs font-mono text-primary whitespace-nowrap">{event.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </div>
                </motion.div>

                {/* Node */}
                <motion.div
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center"
                  whileHover={{ scale: 1.2 }}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      event.status === "completed"
                        ? "bg-primary shadow-[0_0_15px_var(--primary)]"
                        : "bg-card border-2 border-border"
                    }`}
                  >
                    {event.status === "completed" ? (
                      <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                    ) : (
                      <Circle className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                </motion.div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
