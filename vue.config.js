const path = require("path");
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      'preProcessor': 'stylus',
      'patterns': [
        path.resolve(__dirname, './src/assets/css/base.less'),
      ]
    }
  }
}


