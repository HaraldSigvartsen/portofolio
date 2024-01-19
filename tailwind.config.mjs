/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      heading: ["lato", "sans-serif"],
      body: ["lato/400-italic", "sans-serif"],
    },

    extend: {
      colors: {
        white: `hsl(var(--color-white))`,
        offWhite: `hsl(var(--color-offWhite))`,
        lightGray: `hsl(var(--color-lightGray))`,
        gray: `hsl(var(--color-gray))`,
        offGray: `hsl(var(--color-offGray))`,
        darkGray: `hsl(var(--color-darkGray))`,
        lightBlack: `hsl(var(--color-lightBlack))`,
        textColor: `hsl(var(--color-textColor))`,
        black: `hsl(var(--color-black))`,
      },
    },
  },
  plugins: [],
};
