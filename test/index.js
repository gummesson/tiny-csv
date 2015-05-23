/**
 * Dependencies
 */

var fs   = require('fs')
var test = require('tape')
var csv  = require('../')

/**
 * Tests
 */

test('csv(input)', function(assert) {
  var input  = fs.readFileSync('test/fixtures/index.csv', 'utf8')
  var output = [
    { key: 'one', value: 'two' },
    { key: 'three', value: 'four' },
    { key: 'five', value: 'six' }
  ]

  assert.deepEqual(csv(input), output)
  assert.end()
})

test('csv(input, delimiter)', function(assert) {
  var input  = fs.readFileSync('test/fixtures/index.tsv', 'utf8')
  var output = [
    { key: 'one', value: 'two' },
    { key: 'three', value: 'four' },
    { key: 'five', value: 'six' }
  ]

  assert.deepEqual(csv(input, /\t/), output)
  assert.end()
})
