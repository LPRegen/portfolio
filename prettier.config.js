/** @type {import("prettier").Options} */
const config = {
  printWidth: 80,
  trailingComma: "es5",
  tabWidth: 2,
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.js",
};

module.exports = config;
