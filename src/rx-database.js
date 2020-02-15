import * as Rx from 'rxjs'

export default () => {
  let state = { }
  return {
    write: items => new Rx.Observable(observer => {
      state = {
        ...state,
        ...Object.fromEntries(items.map(({ id, ...obj }) => [id, { id, ...obj }]))
      }
      observer.next({ unprocessedItems: [] })
    }),
    read: () => new Rx.Observable(observer => observer.next(Object.values(state)))
  }
}
