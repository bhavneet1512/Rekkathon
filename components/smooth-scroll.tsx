"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

// Register the ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin)

export function SmoothScroll() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const href = this.getAttribute("href")
        if (href && href !== "#") {
          const target = document.querySelector(href)
          if (target) {
            gsap.to(window, {
              duration: 1.5,
              scrollTo: {
                y: target,
                offsetY: 80
              },
              ease: "power3.inOut"
            })
          }
        }
      })
    })

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener("click", () => {})
      })
    }
  }, [])

  return null
}
