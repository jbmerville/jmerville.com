// Used by prettier-eslint (which bundles ESLint 8 and cannot read eslint.config.mjs).
// ESLint 9 ignores this file when eslint.config.mjs is present.
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'warn',
  },
};
