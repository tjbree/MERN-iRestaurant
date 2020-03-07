import { zomatoKey } from '../env.js'

export function searchCategory(id) {   
    return (dispatch, getState) => {
        let myHeaders = new Headers()
        myHeaders.append('user-key', zomatoKey)

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        
        const baseUrl = 'https://developers.zomato.com/api/v2.1'
        fetch(`${baseUrl}/search?entity_id=260&entity_type=city&category=${id}`, requestOptions)
        .then(response => response.json())
        .then(result => {
           dispatch({
                type: "SEARCH",
                payload: result
            })           
        })  
        .catch(error => console.log('error', error))     
    }
}

