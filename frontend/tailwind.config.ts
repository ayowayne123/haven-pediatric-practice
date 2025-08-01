import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./app/**/*.{ts,tsx}", "./sanity/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      boxShadow: {
        layer: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        colors: {
          black: "#000000",
          white: "#fff",
          havenBlue: "#4192CA",
          havenPink: "#F0467E",
          havenYellow: "#F8C015",
          havenGreen: "#69C99E",
          havenDarkBlue: "#0D3C5D",
        },
      },

      fontFamily: {
        sans: ["var(--font-nunito)"],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;
