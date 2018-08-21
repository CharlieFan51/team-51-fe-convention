// .prettierrc.js
module.exports = {
  tabWidth: 2,
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: 'always',
  overrides: [
    {
      files: 'resources/assets/**/*.css',
      options: {
        tabWidth: 4,
        singleQuote: false,
        semicolons: true
      }
    }
  ]
};
