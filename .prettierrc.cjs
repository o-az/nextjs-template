/** @type {import('prettier').Config} */
module.exports = {
  semi: false,
  printWidth: 120,
  endOfLine: 'auto',
  singleQuote: true,
  proseWrap: 'never',
  jsxSingleQuote: true,
  arrowParens: 'avoid',
  singleAttributePerLine: true,
  plugins: ['prettier-plugin-tailwindcss'],
}
