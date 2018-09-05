const lighthouse = require('lighthouse');
const _ = require('lodash');
const SCORE_MAX = 0;

module.exports.lighthouse = async function(domain, opts) {

  //disableDeviceEmulation: true
  //disableCpuThrottling: true
  //disableNetworkThrottling: true
  return await lighthouse('http://' + domain, opts);
}

module.exports.domain = async function(domain, data, opts) {

  data = data || {};
  var result = await module.exports.lighthouse(domain, opts);
  result = result.lhr;

  if (data.simple) {

    var output = {};
    output.seo = parseInt(result.categories.seo.score * 100);
    output.best_practices = parseInt(result.categories['best-practices'].score * 100);
    output.accessibility = parseInt(result.categories.accessibility.score * 100);
    output.pwa = parseInt(result.categories.pwa.score * 100);
    output.performance = parseInt(result.categories.performance.score * 100);


    output.audits = _.chain(result.audits)
    .filter((v, k) => {
      return v.score <= SCORE_MAX;
    })
    .map((v, k) => {
      return v.title;
    })
    .value();

    output.audits_keys = _.chain(result.audits)
    .filter((v, k) => {
      return v.score <= SCORE_MAX;
    })
    .map((v, k) => {
      return v.id;
    })
    .value();

    return output;
  }

  return result;
}
