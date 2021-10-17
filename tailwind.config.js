module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto"],
        Nunito: ["Nunito"],
        Montserrat: ["Montserrat"],
      },
      height: {
        hero: "600px",
        blob: "700px",
      },
      width: {
        hero: "600px",
      },
      textColor: {
        primary: "#5928E5",
        secondary: "#85f396",
        tertiary: "#0099FF",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#5928E5",
        secondary: "#85f396",
      }),
      boxShadow: {
        primary: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
      screens: {
        mobile: "350px",
      },
      inset: {
        "8/5": "80%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
