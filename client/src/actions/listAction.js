import { tokenConfig } from './authAction'

export function fetchList() {   
    return (dispatch, getState) => {
        let requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': tokenConfig(getState)
            }
        }    
        const baseUrl = 'http://localhost:5000'

        fetch(`${baseUrl}/notes`, requestOptions)
        .then(response => response.json())
        .then(response => {
            dispatch({
                type: 'FETCH',
                payload: response
            })           
        })  
        .catch(error => console.log('error', error))     
    }
}

export function saveToList(note) {
    return (dispatch, getState) => {
        let requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': tokenConfig(getState)
            },
            body: JSON.stringify(note)
        }
        
        const baseUrl = 'http://localhost:5000'
        fetch(`${baseUrl}/notes`, requestOptions)
        .then(response => response.json())
        .then(response => {
           dispatch({
                type: 'SAVE',
                payload: response
            })           
        })  
        .catch(error => console.log('error', error))     
    }
}

export function removeFromList(noteId) {   
    return (dispatch, getState) => {
        let requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': tokenConfig(getState)
            }
        }    
        const baseUrl = 'http://localhost:5000'

        fetch(`${baseUrl}/notes/${noteId}`, requestOptions)
        .then(response => {
            dispatch({
                type: 'DELETE',
                payload: noteId
            })           
        })  
        .catch(error => console.log('error', error))     
    }
}
