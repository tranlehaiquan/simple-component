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
    [
      "@babel/preset-env", {
        "targets": {
          "node": "current"
        }
      }
    ], "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
  ]
}
