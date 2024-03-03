/** @type {import('tailwindcss').Config} */
  
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        full: "100%",
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      script: ["Dancing Script", "cursive"],
      josefin: ["Josefin Sans", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    //
  },
  plugins: [],
};
/**
 font-family: 'Dancing Script', cursive;
 font-family: 'Josefin Sans', sans-serif;
 font-family: 'Roboto', sans-serif;
 *
 *
 */
