/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Space Mono", "sans-serif"],
      },
      fontSize: {
        "step--2": "var(--step--2)",
        "step--1": "var(--step--1)",
        "step-0": "var(--step-0)",
        "step-1": "var(--step-1)",
        "step-2": "var(--step-2)",
        "step-3": "var(--step-3)",
        "step-4": "var(--step-4)",
        "step-5": "var(--step-5)",
        "step-container--3": "var(--step-container--3)",
        "step-container--2": "var(--step-container--2)",
        "step-container--1": "var(--step-container--1)",
        "step-container-0": "var(--step-container-0)",
        "step-container-1": "var(--step-container-1)",
        "step-container-2": "var(--step-container-2)",
        "step-container-3": "var(--step-container-3)",
        "step-container-4": "var(--step-container-4)",
        "step-container-5": "var(--step-container-5)",
      },
      boxShadow: {
        sectionTitle:
          "0 0 0 2px rgb(250, 204, 21), 8px 8px 0 0 rgb(250, 204, 21);",
      },
      width: {
        "dynamic-logo": "clamp(2.7994rem, 2.0605rem + 3.6944cqi, 5.524rem)",
      },
      height: {
        "dynamic-logo": "clamp(2.7994rem, 2.0605rem + 3.6944cqi, 5.524rem)",
      },
      spacing: {
        "space-3xs": "var(--space-3xs)",
        "space-2xs": "var(--space-2xs)",
        "space-xs": "var(--space-xs)",
        "space-s": "var(--space-s)",
        "space-m": "var(--space-m)",
        "space-l": "var(--space-l)",
        "space-xl": "var(--space-xl)",
        "space-2xl": "var(--space-2xl)",
        "space-3xl": "var(--space-3xl)",
        "space-container-3xs": "var(--space-container-3xs)",
        "space-container-2xs": "var(--space-container-2xs)",
        "space-container-xs": "var(--space-container-xs)",
        "space-container-s": "var(--space-container-s)",
        "space-container-m": "var(--space-container-m)",
        "space-container-l": "var(--space-container-l)",
        "space-container-xl": "var(--space-container-xl)",
        "space-container-2xl": "var(--space-container-2xl)",
        "space-container-3xl": "var(--space-container-3xl)",
        "space-3xs-2xs": "var(--space-3xs-2xs)",
        "space-2xs-xs": "var(--space-2xs-xs)",
        "space-xs-s": "var(--space-xs-s)",
        "space-s-m": "var(--space-s-m)",
        "space-m-l": "var(--space-m-l)",
        "space-l-xl": "var(--space-l-xl)",
        "space-xl-2xl": "var(--space-xl-2xl)",
        "space-2xl-3xl": "var(--space-2xl-3xl)",
        "space-container-3xs-2xs:": "var(--space-container-3xs-2xs)",
        "space-container-2xs-xs": "var(--space-container-2xs-xs)",
        "space-container-xs-s": "var(--space-container-xs-s)",
        "space-container-s-m": "var(--space-container-s-m)",
        "space-container-m-l": "var(--space-container-m-l)",
        "space-container-l-xl": "var(--space-container-l-xl)",
        "space-container-xl-2xl": "var(--space-container-xl-2xl)",
        "space-container-2xl-3xl": "var(--space-container-2xl-3xl)",
        "space-s-xl": "var(--space-s-xl)",
        "space-s-3xl": "var(--space-s-3xl)",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        ".box-shadow-section-title": {
          boxShadow: theme("boxShadow.sectionTitle"),
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
