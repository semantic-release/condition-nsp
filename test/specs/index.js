const proxyquire = require('proxyquire')
const { test } = require('tap')
const SRError = require('@semantic-release/error')

const condition = proxyquire('../../', {
  // ...
})

test('run-script', (t) => {
  t.ok(condition)
  t.end()
})
