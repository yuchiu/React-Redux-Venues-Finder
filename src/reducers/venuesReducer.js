import constants from '../constants'

let initialState = {
    venueList: [],
    center: {}
}

export default (state = initialState, action) => {
    let newState = Object.assign({}, state)

    switch (action.type) {
        case constants.SEARCH_VENUES:
        console.log(action.payload.data.response.groups[0].items)
            const venuesList = action.payload.data.response.groups[0].items
            newState['venueList'] = venuesList

            /* calculate average lat and lng */
            
            const averageLat = venuesList.map(function (listItem, i, arr) {
                    return listItem.venue.location.lat / arr.length
                })
                .reduce(function (a, b) {
                    return a + b
                })
            const averageLng = venuesList.map(function (listItem, i, arr) {
                    return listItem.venue.location.lng / arr.length
                })
                .reduce(function (a, b) {
                    return a + b
                })
            newState['center'] = {
                lat: averageLat,
                lng: averageLng
            }

            return newState
            break;
        default:
            return state
    }
}