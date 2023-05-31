/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  trailingComma: 'all',
  semi: false,
  singleQuote: true,
}

module.exports = config
