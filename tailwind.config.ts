import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        techjoy: {
          primary: "#22c55e",
          accent: "#bbf7d0",
          deep: "#052e16"
        }
      },
      boxShadow: {
        glow: "0 0 80px rgba(34,197,94,0.4)"
      },
      backgroundImage: {
        "tech-gradient": "linear-gradient(120deg, #f0fdf4 0%, #dcfce7 40%, #ffffff 100%)"
      }
    }
  },
  plugins: []
} satisfies Config;
