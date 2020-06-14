module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "prettier"],
  env: {
    browser: true,
    jasmine: true,
    jest: true,
  },
  rules: {},
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  parser: "@typescript-eslint/parser",
};
