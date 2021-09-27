module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto"],
        Nunito: ["Nunito"],
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
        secondary: "#00CDFF",
        tertiary: "#0099FF",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#5928E5",
        secondary: "#00CDFF",
      }),
      boxShadow: {
        primary: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
