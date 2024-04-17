const webpack = require('webpack');

module.exports = {
  // Other configuration settings...
  resolve: {
    fallback: {
      util: require.resolve('util/'),
    },
  },
};
