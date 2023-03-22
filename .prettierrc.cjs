/** @type {import('prettier').Config} */
module.exports = {
	semi: false,
	useTabs: true,
	printWidth: 120,
	endOfLine: 'auto',
	singleQuote: true,
	proseWrap: 'never',
	jsxSingleQuote: true,
	arrowParens: 'avoid',
	singleAttributePerLine: true,
	plugins: ['prettier-plugin-tailwindcss'],
}
