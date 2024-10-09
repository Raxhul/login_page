/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "body-medium-meduim-24": "var(--body-medium-meduim-24-font-family)",
        "body-regular-regular-18": "var(--body-regular-regular-18-font-family)",
        "body-regular-regular-22": "var(--body-regular-regular-22-font-family)",
        "body-semibold-semibold-18": "var(--body-semibold-semibold-18-font-family)",
        "body-semibold-semibold-20": "var(--body-semibold-semibold-20-font-family)",
        "body-semibold-semibold-24": "var(--body-semibold-semibold-24-font-family)",
        "heading-heading-1": "var(--heading-heading-1-font-family)",
      },
    },
  },
  plugins: [],
};
