export const createReducer = (typeHandlers, defaultState) => {

  return (state = defaultState, action) => {
    const handler = typeHandlers[action.type]

    if (!handler) {
      return state
    }

    return handler(state, action)
  }

}