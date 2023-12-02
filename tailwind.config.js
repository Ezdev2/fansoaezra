/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    components: {
      Switch: {
        handleBg: "#202327",
      },
    },
    extend: {
      colors: {
        darkColor: "var(--color-dark)",
        grise: "var(--color-grise)",
        violet: "var(--color-violet)",
        yellow: "var(--color-yellow)",
        bgSide: "var(--color-bgSide)",
        search: "var(--color-search)",
        border: "var(--color-border)",
        grisText: "var(--color-grisText)",
      },
    },
  },
  plugins: [],
};
