"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation, useScroll } from "framer-motion"

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  duration?: number
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.8
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  )
}

interface ParallaxProps {
  children: React.ReactNode
  offset?: number
}

export function Parallax({ children, offset = 50 }: ParallaxProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      ref={ref}
      style={{
        y: scrollYProgress ? scrollYProgress.get() * offset : 0
      }}
    >
      {children}
    </motion.div>
  )
}
