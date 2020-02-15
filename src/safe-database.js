
export default () => {
  let state = { }
  return {
    write: items => {
      state = {
        ...state,
        ...Object.fromEntries(items.map(({ id, ...obj }) => [id, { id, ...obj }]))
      }
      return { unprocessedItems: [] }
    },
    read: () => {
      return Object.values(state)
    }
  }
}
