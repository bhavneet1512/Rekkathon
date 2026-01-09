"use client"

export function CircuitBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            {/* Horizontal traces */}
            <line x1="0" y1="20" x2="30" y2="20" stroke="currentColor" strokeWidth="1" className="text-primary" />
            <line x1="40" y1="20" x2="100" y2="20" stroke="currentColor" strokeWidth="1" className="text-primary" />
            <line x1="0" y1="50" x2="60" y2="50" stroke="currentColor" strokeWidth="1" className="text-accent" />
            <line x1="70" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="1" className="text-accent" />
            <line x1="0" y1="80" x2="45" y2="80" stroke="currentColor" strokeWidth="1" className="text-primary" />
            <line x1="55" y1="80" x2="100" y2="80" stroke="currentColor" strokeWidth="1" className="text-primary" />

            {/* Vertical traces */}
            <line x1="20" y1="0" x2="20" y2="40" stroke="currentColor" strokeWidth="1" className="text-primary" />
            <line x1="20" y1="60" x2="20" y2="100" stroke="currentColor" strokeWidth="1" className="text-primary" />
            <line x1="50" y1="0" x2="50" y2="30" stroke="currentColor" strokeWidth="1" className="text-accent" />
            <line x1="50" y1="70" x2="50" y2="100" stroke="currentColor" strokeWidth="1" className="text-accent" />
            <line x1="80" y1="0" x2="80" y2="50" stroke="currentColor" strokeWidth="1" className="text-primary" />
            <line x1="80" y1="60" x2="80" y2="100" stroke="currentColor" strokeWidth="1" className="text-primary" />

            {/* Connection nodes */}
            <circle cx="20" cy="20" r="3" fill="currentColor" className="text-primary" />
            <circle cx="50" cy="50" r="4" fill="currentColor" className="text-accent" />
            <circle cx="80" cy="80" r="3" fill="currentColor" className="text-primary" />
            <circle cx="35" cy="20" r="2" fill="currentColor" className="text-primary" />
            <circle cx="65" cy="50" r="2" fill="currentColor" className="text-accent" />

            {/* Small components */}
            <rect x="45" y="18" width="8" height="4" fill="currentColor" className="text-muted-foreground" rx="1" />
            <rect x="15" y="78" width="10" height="4" fill="currentColor" className="text-muted-foreground" rx="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
      </svg>

      {/* Floating glowing nodes */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-glow shadow-[0_0_20px_var(--primary)]" />
      <div
        className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent rounded-full animate-pulse-glow shadow-[0_0_25px_var(--accent)]"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute top-2/3 left-1/2 w-2 h-2 bg-primary rounded-full animate-pulse-glow shadow-[0_0_20px_var(--primary)]"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-accent rounded-full animate-pulse-glow shadow-[0_0_20px_var(--accent)]"
        style={{ animationDelay: "1.5s" }}
      />
    </div>
  )
}
