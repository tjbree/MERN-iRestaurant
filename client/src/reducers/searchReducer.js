
export default function searchReducer(result = {}, action) {
    switch(action.type) {
        case 'SEARCH':
            return action.payload
        default:
            return result
    }
}
