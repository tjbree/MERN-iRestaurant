
export default function listReducer(list = [], action) {
    switch(action.type) {
        case 'FETCH':
            return action.payload
        case 'SAVE':
            return [...list, action.payload]
        case 'DELETE':
            return list.filter(item => item.uuid !== action.payload)
        default:
            return list
    }
}
