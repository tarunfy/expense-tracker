module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto"],
      },
      height: {
        hero: "600px",
      },
      width: {
        hero: "600px",
      },
      textColor: {
        primary: "#5928E5",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#5928E5",
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
