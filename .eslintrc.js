module.exports = {
    parser: "babel-eslint",
    extends: [
      "standard",
      "prettier",
      "plugin:security/recommended"
    ],
    plugins: [ "prettier", "security" ],
    rules: {
      strict: 0,
      "prettier/prettier": "error"
    },
    env: {
      jest: true,
      node: true
    }
};
