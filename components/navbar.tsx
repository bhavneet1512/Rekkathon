"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#tracks", label: "Tracks" },
  { href: "#timeline", label: "Timeline" },
  { href: "#prizes", label: "Prizes" },
  { href: "#sponsors", label: "Sponsors" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
        isScrolled ? " backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-0">
            <span>
              <Image src="/rekka_logo.png" alt="REKKATHON Logo" width={70} height={70} />
            </span>
            {/* <span className="text-xl font-bold text-primary">REKKA</span>
            <span className="text-xl font-bold text-accent">THON</span> */}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="cursor-target text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="https://rekkathon.devfolio.co/" target="_blank" rel="noopener noreferrer">
                Register
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden backdrop-blur-lg border-b border-border">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="w-full bg-primary text-primary-foreground">
              <a href="https://devfolio.co" target="_blank" rel="noopener noreferrer">
                Register on Devfolio
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
