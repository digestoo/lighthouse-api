'use strict';

const assert = require('assert');
const lib = require('./../lib');
const data = require(__dirname + '/fixtures/shoprank.json');
const sinon = require('sinon');
const lighthouse = require('lighthouse');

describe('basic tests', function() {

  before(function() {
  });

  after(function() {
  });

  beforeEach(function() {
  });

  it('checks lighthouse response', async function test() {

    sinon.stub(lib, 'lighthouse').resolves({
      lhr: data
    });

    var result = await lib.domain('shoprank.co');
  })

  it('checks lighthouse simple response', async function test() {

    var result = await lib.domain('shoprank.co', {
      simple: true
    });

    assert.equal(result.seo, 100);
    assert.equal(result.best_practices, 67);
    assert.equal(result.pwa, 19);
    assert.equal(result.performance, 53);


    console.log(result);
  })
})
