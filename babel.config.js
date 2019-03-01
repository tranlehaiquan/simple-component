module.exports = {
  env: {
    test: {
    },
    dev: {
      plugins: [
        "react-hot-loader/babel"
      ]
    }
  },
  "presets": [
    "@babel/preset-env", "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
  ]
}
