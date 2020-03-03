import { zomatoKey } from '../env.js'

export function searchRestaurant(entityId, keyword) {   
    return (dispatch, getState) => {
        let myHeaders = new Headers()
        myHeaders.append('user-key', zomatoKey)

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }

        const baseUrl = 'https://developers.zomato.com/api/v2.1/search?'
        fetch(`${baseUrl}/entity_id=${entityId}&entity_type=city&q=${keyword}`, requestOptions)
        .then(response => response.json())
        .then(result => dispatch({
            type: "SEARCH",
            payload: result
        }))
        .catch(error => console.log('error', error))
    }
}

