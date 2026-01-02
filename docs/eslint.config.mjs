import markdown from "@eslint/markdown";
import importPlugin from "eslint-plugin-import";
import stylistic from "@stylistic/eslint-plugin";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.md"],
    plugins: { markdown },
    processor: "markdown/markdown",
  },
  {
    files: ["**/*.md/*.ts", "**/*.md/*.tsx", "**/*.md/*.js", "**/*.md/*.jsx"],
    plugins: {
      import: importPlugin,
      "@stylistic": stylistic,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      "import/no-duplicates": "error",
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/comma-spacing": ["error", { before: false, after: true }],
    },
  },
];
