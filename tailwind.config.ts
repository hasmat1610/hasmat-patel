import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  safelist: [
    // Marvel color classes
    'text-primary', 'text-secondary', 'text-marvel-blue', 'text-energy-pulse',
    'bg-primary', 'bg-secondary', 'bg-marvel-blue', 'bg-energy-pulse',
    'bg-primary/10', 'bg-secondary/10', 'bg-marvel-blue/10', 'bg-energy-pulse/10',
    'bg-primary/20', 'bg-secondary/20', 'bg-marvel-blue/20', 'bg-energy-pulse/20',
    'bg-primary/30', 'bg-secondary/30', 'bg-marvel-blue/30', 'bg-energy-pulse/30',
    'border-primary/20', 'border-secondary/20', 'border-marvel-blue/20', 'border-energy-pulse/20',
    'hover:bg-primary/10', 'hover:bg-secondary/10', 'hover:bg-marvel-blue/10', 'hover:bg-energy-pulse/10',
    'hover:text-primary', 'hover:text-secondary', 'hover:text-marvel-blue', 'hover:text-energy-pulse',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Marvel-specific colors
        "marvel-blue": {
          DEFAULT: "hsl(var(--marvel-blue))",
          foreground: "hsl(var(--marvel-blue-foreground))",
        },
        "hero-glow": "hsl(var(--hero-glow))",
        "gold-glow": "hsl(var(--gold-glow))",
        "blue-glow": "hsl(var(--blue-glow))",
        "energy-pulse": "hsl(var(--energy-pulse))",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Orbitron', 'monospace'],
        hero: ['Orbitron', 'monospace'],
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-marvel': 'var(--gradient-marvel)',
        'gradient-card': 'var(--gradient-card)',
      },
      boxShadow: {
        'hero': 'var(--shadow-hero)',
        'glow': 'var(--shadow-glow)',
        'card': 'var(--shadow-card)',
      },
      transitionTimingFunction: {
        'marvel': 'var(--transition-marvel)',
        'bounce-marvel': 'var(--bounce-timing)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
