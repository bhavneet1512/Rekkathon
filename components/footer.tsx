import { Github, Twitter, Instagram, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/team_vibhav?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/team-vibhav", label: "LinkedIn" },
  
]

export function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and organizer */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-0 mb-2">
              <span className="text-xl font-bold text-primary m-0 p-0">REKKA</span>
              <span className="text-xl font-bold text-accent m-0 p-0">THON</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Organized by <span className="text-primary">Team Vibhav</span> | NIT Hamirpur
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="w-4 h-4" />
            <a href="mailto:contact@vibhav.nimbus@nith.ac.in" className="hover:text-primary transition-colors">
              contact @vibhav.nimbus@nith.ac.in
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} REKKATHON. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
