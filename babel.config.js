module.exports = {
  env: {
    test: {
    },
    dev: {
      plugins: []
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
    "react-hot-loader/babel"
  ]
}
