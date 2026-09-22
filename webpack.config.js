const path = require('path');
module.exports = { entry: './src/assets/js/app.js', output: { path: path.resolve(__dirname,'public'), filename: 'app.js' }, mode: 'production' };
