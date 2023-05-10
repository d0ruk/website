module.exports = {
  extends: ["eslint:recommended"],
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    __env: true,
    process: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    quotes: [2, "double"],
    "arrow-parens": [2, "as-needed"],
    "max-len": [
      2,
      80,
      {
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    "comma-dangle": ["error", "always-multiline"],
    "eol-last": ["error", "always"],
  },
};
