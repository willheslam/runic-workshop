
export default () => {
  let state = { }
  return {
    write: items => {
      if (Math.random() > 0.9) {
        throw new Error('Database unavailable!')
      }
      const { stored, rejected } = items.reduce(({ stored, rejected }, item) => {
        const success = Math.random() > 0.6
        return success
          ? { stored: stored.concat([item]), rejected }
          : { stored, rejected: rejected.concat([item]) }
      }, { stored: [], rejected: [] })

      state = {
        ...state,
        ...Object.fromEntries(stored.map(({ id, ...obj }) => [id, { id, ...obj }]))
      }

      return { unprocessedItems: rejected }
    },
    read: () => {
      if (Math.random() > 0.9) {
        throw new Error('Database unavailable!')
      }
      return Object.values(state)
    }
  }
}
