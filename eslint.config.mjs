import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        languageOptions: {
            sourceType: "commonjs",
            parser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },
        plugins: {
            "@typescript-eslint": tseslint,
            prettier: prettierPlugin,
        },
        rules: {
            ...pluginJs.configs.recommended.rules,
            ...tseslint.configs.recommended.rules,
            ...prettierConfig.rules,
            "prettier/prettier": ["error", { tabWidth: 4, useTabs: false }],
        },
    },
    {
        files: ["**/*.js"],
        languageOptions: {
            sourceType: "commonjs",
        },
        globals: globals.node,
    },
    {
        files: ["**/*.ts"],
        languageOptions: {
            sourceType: "module",
            globals: globals.node,
        },
    },
];
