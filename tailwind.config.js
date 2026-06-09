/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0A2E6B",
        royal: "#1B4DFF",
        cyan: "#22D3EE",
        ink: "#0B1736",
      },
      fontFamily: {
        display: ["Sora", "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 10px 40px rgba(27,77,255,0.35)",
        soft: "0 12px 32px rgba(10,46,107,0.10)",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg,#0A2E6B 0%,#1B4DFF 60%,#22D3EE 100%)",
        "gradient-hero": "linear-gradient(135deg,#0A2E6B 0%,#0B1736 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out both",
        "slide-up": "slideUp 0.7s ease-out both",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        slideUp: { "0%": { opacity: 0, transform: "translateY(24px)" }, "100%": { opacity: 1, transform: "translateY(0)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
      },
    },
  },
  plugins: [],
};
