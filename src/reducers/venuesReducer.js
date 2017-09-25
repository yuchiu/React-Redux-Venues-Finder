import constants from '../constants'

let initialState = {
    venueList: []
}

export default (state = initialState, action) => {
    let newState = Object.assign({}, state)

    switch (action.type) {
        case constants.SEARCH_VENUES:
            newState['venueList'] = action.payload.data.response.venues
            return newState
            break;
        default:
            return state
    }
}