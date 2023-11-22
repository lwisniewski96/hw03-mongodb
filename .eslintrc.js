module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["standard", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {},
  settings: {
    "import/resolver": {
      node: {
        paths: ["controller"],
        alias: {
          map: [["#validators", "./Validators"]],
          extensions: [".js"],
        },
      },
    },
  },
  ignorePatterns: ["node_modules/"],
};
