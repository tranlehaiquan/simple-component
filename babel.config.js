module.exports = {
  env: {
    development: {
      presets: [
        "@babel/preset-env", "@babel/preset-react"
      ],
      plugins: [
        "react-hot-loader/babel",
        "@babel/plugin-proposal-class-properties",
      ]
    },
    test: {
      presets: [
        "@babel/preset-env", "@babel/preset-react"
      ],
      plugins: [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-runtime"
      ]
    },
    production: {
      presets: [
        "@babel/preset-env", "@babel/preset-react"
      ],
      plugins: [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-runtime"
      ]
    }
  }
}
