module.exports = {
  rules: {
    "max-len": ["error", { code: 100 }],
    "no-console": 1,
    "no-extra-boolean-cast": 0,
    "@typescript-eslint/restrict-plus-operands": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-floating-promises": 0,
    "@typescript-eslint/no-unsafe-member-access": 0,
    "@typescript-eslint/no-unsafe-assignment": 0,
  },
  ignores: ["src/public/", "build.ts"],
};
