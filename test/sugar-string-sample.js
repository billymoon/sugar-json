/* global describe it */
'use strict'

var assert = require('assert')

var sugarJson = require('../sugar-json')

describe('String.objectify', function () {
  it('should be function', function () {
    assert.equal(typeof sugarJson.objectify, 'function')
  })

  it('should return js object from string input', function () {
    assert.equal(sugarJson.objectify('{"cool":"beans"}').cool, 'beans')
  })

  it('should throw error for invalid JSON', function () {
    assert.throws(function () {
      sugarJson.objectify('{uncool:beans}')
    })
  })
})

describe('String.stringify', function () {
  it('module should be function', function () {
    assert.equal(typeof sugarJson.stringify, 'function')
  })

  it('should return json string from object input', function () {
    assert.equal(sugarJson.stringify({cool: 'beans'}), '{"cool":"beans"}')
  })

  it('should return empty object for unserializable input', function () {
    assert.equal(sugarJson.stringify(/unserializable/), '{}')
    assert.equal(sugarJson.stringify({a: 1, b: /unserializable/}), '{"a":1,"b":{}}')
  })
})
