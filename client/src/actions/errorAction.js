
export const returnErrors = msg => {
  return {
    type: 'GET_ERRORS',
    payload: msg
  }
}

export const clearErrors = () => {
  return {
    type: 'CLEAR_ERRORS'
  }
}
