require("@babel/register")({
  "plugins": [
    "dynamic-import-node"
  ]
});
require('asset-require-hook')({
  extensions: ['jpg', 'jpeg','less'],
  name: '/static/[hash].[ext]'
})
require('asset-require-hook')({
  extensions: ['woff','svg','eot','ttf','woff2'],
  limit: 10000
})
const hook = require('css-modules-require-hook');
const lessParser = require('postcss-less').parse;


hook({
  generateScopedName: '[name]__[local]___[hash:base64:5]',
});
// hook({
//   extensions: '.less',
//   processorOpts: { parser: lessParser },
// });
require('./server/index.js');