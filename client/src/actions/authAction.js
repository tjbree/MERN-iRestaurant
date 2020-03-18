import { returnErrors } from './errorAction'
import { fetchList } from './listAction'

export const tokenConfig = getState => {
    const token = getState().auth.token
    if (token) return token
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
                dispatch(fetchList())
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


