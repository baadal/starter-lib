module.exports = {
  root: true,
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  env: {
    "browser": true,
    "node": true
  },
  plugins: [
    "@typescript-eslint",
    "eslint-plugin-react",
    "eslint-plugin-prettier",
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended", // Uses the recommended rules from eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier", // Uses eslint-config-prettier to disable ESLint rules that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
  }
};
