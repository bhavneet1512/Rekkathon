"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"
import { motion } from "framer-motion"

export function RegistrationSection() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Dynamically load Devfolio SDK for this component
    const script = document.createElement('script')
    script.src = 'https://apply.devfolio.co/v2/sdk.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])
  const containerVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
  return (
    <section id="register" className="relative py-24 px-4 bg-card/30">
      <motion.div className="max-w-4xl mx-auto text-center" initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ amount: 0.3 }}>
        <motion.div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 mb-8" variants={itemVariants} whileHover={{ scale: 1.1, rotate: 5 }}>
          <Rocket className="w-10 h-10 text-primary" />
        </motion.div>
        <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6" variants={itemVariants}>
          Ready to <span className="text-primary">Innovate</span>?
        </motion.h2>
        <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed" variants={itemVariants}>
          Join hundreds of developers, designers, and innovators at India&apos;s most exciting hardware + software hackathon. Register now and be part of something extraordinary.
        </motion.p>
        <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          {isClient ? (
            <div 
              className="apply-button inline-block m-auto" 
              data-hackathon-slug="rekkathon" 
              data-button-theme="light"
              style={{ height: '44px', width: '312px' }}
            />
          ) : (
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12 py-7 shadow-lg hover:shadow-xl transition-all">
              Register on Devfolio
            </Button>
          )}
        </motion.div>
        <motion.div variants={itemVariants} className="mt-6">
          <p className="text-sm text-muted-foreground">
            Or{' '}
            <a href="https://rekkathon.devfolio.co/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              register on Devfolio directly
            </a>
          </p>
        </motion.div>
        <motion.p className="text-sm text-muted-foreground mt-6" variants={itemVariants}>
          Free to participate • Team size: 2-4 members • Limited spots available
        </motion.p>
      </motion.div>
    </section>
  )
}
