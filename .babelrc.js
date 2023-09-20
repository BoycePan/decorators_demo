// .babelrc.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions', 'not dead'],
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  // presets: ['@babel/preset-env', '@babel/preset-typescript'],
  plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
};
