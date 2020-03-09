
export default function RestaurantReducer(result = {}, action) {
    switch(action.type) {
        case 'SEARCH':
            return action.payload
        default:
            return result
    }
}
