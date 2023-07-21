const path = require('path');

module.exports = {
  entry: './index.js', // Your entry point, typically the main JavaScript file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for the bundled files
    filename: 'bundle.js', // Output file name
    
  },
  mode: 'development', // Set the mode to 'development' or 'production' based on your needs
  // Add more Webpack configuration options here if needed
  
};
