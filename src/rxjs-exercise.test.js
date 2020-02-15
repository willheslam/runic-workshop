import * as Rx from 'rxjs'
import { map, filter, catchError, flatMap, reduce } from 'rxjs/operators'

import test from 'ava'

test('addition', async t => {
  t.deepEqual(
    await Rx.of(42)
      .pipe(map(x => {
        // ...
      }))
      .pipe(reduce((array, value) => array.concat([value]), []))
      .toPromise(),
    [43]
  )
})

test('filtering', async t => {
  t.deepEqual(
    await Rx.of(1, 2, 3, 4, 5, 6)
      .pipe(
        filter(x => {
          // ...
        }),
        map(x => {
          // ...
        }))
      .pipe(reduce((array, value) => array.concat([value]), []))
      .toPromise(),
    [20, 40, 60]
  )
})

test('a b c', async t => {
  t.deepEqual(
    await Rx.from([
      // ...
    ])
      .pipe(reduce((array, value) => array.concat([value]), []))
      .toPromise(),
    ['a', 'b', 'c']
  )
})

test('1 10 100 2 20 200 3 30 300', async t => {
  t.deepEqual(
    await Rx.from([1, 2, 3])
      .pipe(
        flatMap(x => {
          // ...
        })
      )
      .pipe(reduce((array, value) => array.concat([value]), []))
      .toPromise(),
    [1, 10, 100, 2, 20, 200, 3, 30, 300]
  )
})

test('error handling', async t => {
  t.deepEqual(
    await Rx.throwError(42)
      .pipe(
        catchError(() => {
          // ...
        })
      )
      .pipe(reduce((array, value) => array.concat([value]), []))
      .toPromise(),
    [42, 43, 44]
  )
})
