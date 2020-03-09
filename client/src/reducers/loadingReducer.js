
export default function RestaurantReducer(state = true, action) {
    switch(action.type) {
        case 'LOADING':
            return true
        case 'LOADED':
            return false
        default:
            return state
    }
}
