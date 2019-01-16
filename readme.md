# Simple Component

Project Reactjs Component. Go from scratch /skrætʃ/.
  - Step webpack to dev, transpiler react syntax, webpack dev serve.
  - Step eslint.
  - Publish project to NPM

## Step up project:

For detail go google search : ).

1. Install webpack, webpack-cli (the bundler) `npm i webpack webpack-cli`. 
2. Install babel transpiler `npm i @babel/core @babel/plugin-proposal-class-properties @babel/preset-env @babel/preset-react`.
3. Create folder `src`, `src/components`, `src/index.js`, `dist/index.html`.
4. Create webpack config file `tools/webpack.config.js`
5. Create babel config file `.babelrc`
6. Add script to npm `"start": "webpack-dev-server --watch --mode development --config tools/webpack.config.js"`
