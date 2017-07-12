var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: { 
      deps: [ 
            './script/vendor.js'
          ] },
  output: {
    filename: 'bundle-[name].js',
    path: path.resolve(__dirname, 'dist')
  }
, plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
]
};