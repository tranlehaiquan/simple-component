module.exports = {
  presets: [
    "@babel/preset-env", "@babel/preset-react"
  ],
  env: {
    development: {
      plugins: [
        "react-hot-loader/babel",
        "@babel/plugin-proposal-class-properties",
      ]
    },
    test: {
      plugins: [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-runtime"
      ]
    },
    production: {
      plugins: [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-runtime"
      ]
    }
  }
}
