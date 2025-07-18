/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  semi: true,
  trailingComma: "es5",
  tabWidth: 2,
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.ts", // optional if you want it to use your Tailwind settings
};
