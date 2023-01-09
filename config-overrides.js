const path = require('path');

const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    '@api': path.resolve(__dirname, 'src/api'),
    '@constants': path.resolve(__dirname, 'src/constants'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@hooks': path.resolve(__dirname, 'src/hooks'),
    '@store': path.resolve(__dirname, 'src/store'),
    '@styles': path.resolve(__dirname, 'src/styles'),
    '@types': path.resolve(__dirname, 'src/types'),
    '@utils': path.resolve(__dirname, 'src/utils'),
  }),
);
