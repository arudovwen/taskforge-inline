// postcss.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/postcss'), // use the separate postcss plugin
    require('autoprefixer'),          // automatically add vendor prefixes
  ],
}
