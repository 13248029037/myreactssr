require("@babel/register")({
    "plugins": [
      "dynamic-import-node"
    ]
  });
  require('./server/index.js');