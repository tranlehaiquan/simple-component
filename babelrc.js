module.exports = function(api = 'development') {
  const plugins = [
    "@babel/plugin-proposal-class-properties"
  ]

  if (api !== 'production') {
    plugins.push("react-hot-loader/babel");
  }

  return {
    "presets": [
      [
        "@babel/preset-env", {
          "targets": {
            "node": "current"
          }
        }
      ]
      , "@babel/preset-react"],
    "plugins": plugins
  }  
}
