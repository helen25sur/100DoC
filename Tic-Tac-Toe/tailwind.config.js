module.exports = {
  important: false,
  content: ["./index.html", "./src/**/*.js"],
  safelist: ["hover:bg-teal-900", "hover:bg-teal-200", "backdrop:bg-black/50"],
  theme: {
    extend: {
      backdropOpacity: {
        50: "0.5",
      },
    },
  },
  plugins: [],
};