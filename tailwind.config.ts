import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        custVeryDarkGrayishBlue: "hsl(217, 19%, 35%)",
        custDesaturatedDarkBlue: "hsl(214, 17%, 51%)",
        custGrayishBlue: "hsl(212, 23%, 69%)",
        custLightGrayishBlue: "hsl(210, 46%, 95%)",
      },
    },
  },
  plugins: [],
} satisfies Config;