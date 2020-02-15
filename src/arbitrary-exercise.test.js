
import fc from 'fast-check'
import test from 'ava'

test('numbers', t => {
  const gen = fc.const('change me')

  const results = fc.sample(gen, 5)

  t.assert(results.every(num => typeof num === 'number'))
})

test('even numbers 1', t => {
  const gen = fc.const('change me')
    .filter(x => {
      // ...
    })

  const results = fc.sample(gen, 5)

  t.assert(results.every(num => num % 2 === 0))
})

test('even numbers 2', t => {
  const gen = fc.const('change me')
    .map(x => {
    // ...
    })

  const results = fc.sample(gen, 5)

  t.assert(results.every(num => num % 2 === 0))
})

test('compound', t => {
  const gen = fc.string()
    .chain(x => {
    // ...
    })

  const results = fc.sample(gen, 5)

  t.assert(results.every(obj => typeof obj.foo === 'string' && obj.bar === 'baz'))
})
