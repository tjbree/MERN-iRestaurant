import { returnErrors } from './errorAction'

// Setup config/headers and token
export const tokenConfig = getState => {
    const token = getState().auth.token
    if (token) return token
}

export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: 'USER_LOADING' })
    
    const baseUrl = 'http://localhost:5000'
    fetch(`${baseUrl}/auth/user`, tokenConfig(getState))
        .then(response => response.json())
        .then(result => {
            dispatch({
                type: 'USER_LOADED',
                payload: result
            })           
        })  
        .catch(error => {
            dispatch(returnErrors(error.data, error.status))
            dispatch({
                type: 'AUTH_ERROR'
            })
        })     
}

export const registerUser = ({ name, email, password }) => dispatch => {
    let requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    }

    const baseUrl = 'http://localhost:5000'
    fetch(`${baseUrl}/users`, requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.token) {
                dispatch({
                    type: 'REGISTER_SUCCESS',
                    payload: result
                })
            } else {
                dispatch(
                    returnErrors(result.msg)
                )
                dispatch({
                    type: 'REGISTER_FAIL'
                })
            }          
        })
}

export const login = ({ email, password }) => dispatch => {
    let requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }

    const baseUrl = 'http://localhost:5000'
    fetch(`${baseUrl}/auth`, requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.token) {
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: result
                })
            } else {
                dispatch(
                    returnErrors(result.msg)
                )
                dispatch({
                    type: 'LOGIN_FAIL'
                })
            }                   
        })      
}

export const logout = () => {
  return {
    type: 'LOGOUT_SUCCESS'
  }
}


