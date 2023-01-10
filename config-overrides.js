const path = require('path');

const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    '@api': path.resolve(__dirname, 'src/api'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@constants': path.resolve(__dirname, 'src/constants'),
    '@hooks': path.resolve(__dirname, 'src/hooks'),
    '@model': path.resolve(__dirname, 'src/model'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@styles': path.resolve(__dirname, 'src/styles'),
    '@type': path.resolve(__dirname, 'src/type'),
    '@utils': path.resolve(__dirname, 'src/utils'),
  }),
);
