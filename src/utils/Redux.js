export const createReducer = (typeHandlers, defaultState) => {

  return (state = defaultState, action) => {
    const handler = typeHandlers[action.type]

    if (!handler) {
      return state
    }

    const result = handler(state, action)

    return {...state, ...result}
  }

}