`npm install jest puppeteer jest-puppeteer`

`npm install @babel/core @babel/preset-env babel-jest`

babel.config.js

`module.exports = {
presets: [
[
"@babel/preset-env",
{
targets: {
node: "current",
},
},
],
],
};`
