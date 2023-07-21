const path = require('path');

module.exports = {
  entry: './index.js', // Your entry point, typically the main JavaScript file

  resolve: {
    fallback: {
      assert: require.resolve('assert/'),
      fs: false,
      dns: require.resolve('dns/'),
      os: require.resolve('os-browserify/browser'),
      net: require.resolve('net-browserify'),
      tls: require.resolve('tls-browserify'),
      https: require.resolve('https-browserify'),
      zlib: require.resolve('browserify-zlib'),
      querystring: require.resolve('querystring-es3'),
      path: require.resolve('path-browserify'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-http'),
      http: require.resolve('stream-http'),
      async_hooks: require.resolve('async_hooks'),
      child_process: false,
      dgram: require.resolve('dgram'), // Add this line for 'dgram'
      timers: require.resolve('timers-browserify'),

    },
  },



  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for the bundled files
    filename: 'bundle.js', // Output file name


  },
  mode: 'development', // Set the mode to 'development' or 'production' based on your needs
  // Add more Webpack configuration options here if needed
  
};
