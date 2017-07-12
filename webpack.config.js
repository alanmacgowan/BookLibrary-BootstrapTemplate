var path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: { 
      deps: [ 
            './script/jquery-1.10.2.min.js',
            './script/jquery-migrate-1.2.1.min.js',
            './script/jquery-ui.js',
            './script/bootstrap.min.js',
            './script/bootstrap-hover-dropdown.js',
            './script/icheck.min.js',
            './script/jquery.menu.js',
            './script/main.js'
          ] },
  output: {
    filename: 'bundle-[name].js',
    path: path.resolve(__dirname, 'dist')
  }
,// plugins: [
//     new webpack.ProvidePlugin({
//         $: "jquery",
//         jQuery: "jquery"
//     })
// ]
};