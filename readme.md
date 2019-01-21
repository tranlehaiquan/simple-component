# Simple Component

## Install

`npm install simple-components-react`

## Todo

Project Reactjs Component. Go from scratch /skrætʃ/.
  - [x] Step up webpack to dev, transpiler react syntax, webpack dev serve.
  - [x] Publish project to NPM (Defined which one will be install)
  - [x] Step up eslint.
  - [ ] Step up test
  - [ ] Step up CI/CD
  - [ ] Step up precommit? (Optional)

## Step up project:

For detail go google search : ).

1. Install webpack, webpack-cli (the bundler) `npm i webpack webpack-cli`. 
2. Install babel transpiler `npm i @babel/core @babel/plugin-proposal-class-properties @babel/preset-env @babel/preset-react`.
3. Create folder `src`, `src/components`, `src/index.js`, `dist/index.html`.
4. Create webpack config file `tools/webpack.config.js`, `tools/webpack.prod.js`
5. Create babel config file `.babelrc`
6. Add script to npm `"start": "webpack-dev-server --watch --mode development --config tools/webpack.config.js"`
7. Add webpack config with 3 files in tools

## Directory

```
├── dist
│   └── index.js
├── src
│   ├── components (All component go here)
│   ├── util
│   ├── index.html (template ver devserver)
│   ├── build.js (file import all components for build)
│   └── index.js (file for reactDom run devserver)
├── styles
│   ├── *.scss
│   ├── variables.scss
│   └── index.scss (import all file scss)
└── tools
    ├── webpack.dev.js
    └── webpack.build.js
```
