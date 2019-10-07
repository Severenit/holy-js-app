require('dotenv').config();
const fetch = require('node-fetch');
const shell = require('shelljs');
const fs = require('fs');
const Css = require('json-to-css');
const headers = new fetch.Headers();
const devToken = process.env.DEV_TOKEN;
const fileKey = process.argv[2];
const nodeId = process.argv[3];

const getFiles = source => fs.readdirSync(source);
const indexCss = getFiles('./src/variables/').map(item => `@import 'variables/${item}';\n`).join('');

console.log('####: g', indexCss);