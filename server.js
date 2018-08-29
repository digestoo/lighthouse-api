const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

const express = require('express')
const Promise = require('bluebird');
const app = express()

const opts = {
  logLevel: 'info',
  chromeFlags: [
    '--show-paint-rects',
    '--headless',
    '--disable-gpu',
    '--user-data-dir=/tmp/chrome-test-profile',
    '--disable-web-security',
    '--disable-sandbox',
    '--disable-dev-shm-usage'
  ]
};

const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

chromeLauncher.launch({chromeFlags: opts.chromeFlags})
.then(chrome => {
  console.log(chrome);
  opts.port = chrome.port;
  console.log('Browser loaded');
})
.catch(err => {
  console.log(err);
})

app.get('/status', async (req, res) => {
  res.json({});
})

app.all('/:domain', async (req, res) => {
  return lighthouse('http://' + req.params.domain, opts)
  .then(results => {
    return res.json(results.lhr);
  });
})

module.exports = app;
