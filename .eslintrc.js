module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: ["react"],
  extends: [
    "plugin:react/recommended"
  ],
  settings: {
    react: {
      createClass: "createReactClass",
      pragma: "React",
      version: "16.0",
      flowVersion: "0.53"
    },
    propWrapperFunctions: ["forbidExtraProps"]
  },
  rules: {
    indent: ["error", 2],
    "no-console": "off",
    "no-inner-declarations": "off",
    "valid-jsdoc": "off",
    "require-jsdoc": "off",
    quotes: ["error", "backtick"],
    "consistent-return": ["error"],
    "arrow-body-style": [
      "error",
      "as-needed",
      { requireReturnForObjectLiteral: true }
    ],
    "jsx-quotes": ["error", "prefer-double"],
    // semi: ["error", "never"],
    "no-extra-semi": ["error", "never"],
    "object-curly-spacing": ["error", "always"],
    "comma-dangle": ["error", "never"],
    "react/prop-types": [
      "error",
      {
        ignore: ["children"]
      }
    ]
  }
};
