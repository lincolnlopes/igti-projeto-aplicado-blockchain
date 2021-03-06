module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    "import/extensions": "off",
    "class-methods-use-this": "off",
    "import/first": "off",
    quotes: "double",
  },
};
