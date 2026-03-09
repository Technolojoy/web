import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        techjoy: {
          primary: "#5EC6FF",
          accent: "#B7F4FF",
          deep: "#0A1A2B"
        }
      },
      boxShadow: {
        glow: "0 0 80px rgba(94,198,255,0.4)"
      },
      backgroundImage: {
        "tech-gradient": "linear-gradient(120deg, #f6fbff 0%, #ecf8ff 40%, #ffffff 100%)"
      }
    }
  },
  plugins: []
} satisfies Config;
