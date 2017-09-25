import constants from '../constants'

let initialState = {
    list: [{
        name: 'asd',
        desc: 'sdadsa'
    }, {
        name: 'sda',
        desc: 'adssad'
    }]
}

export default (state = initialState, action) => {
    let newState = Object.assign({}, state)
    let newList = Object.assign([], newState.list)

    switch (action.type) {

        case constants.ADD_TODO:
            newList.push(action.payload)
            newState['list'] = newList

            return newState
            break;
        case constants.DELETE_TODO:
            newList = newList.filter((item) => {
                return item.name !== action.payload
            })
            newState['list'] = newList
            return newState
            break;
        default:
            return state
    }
}