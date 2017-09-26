import constants from '../constants'

let initialState = {
    venueList: [],
    center: {}
}

export default (state = initialState, action) => {
    let newState = Object.assign({}, state)

    switch (action.type) {
        case constants.SEARCH_VENUES:
            const venuesList = action.payload.data.response.venues.slice(0, 10)
            newState['venueList'] = venuesList
            const averageLat = venuesList.map(function (venue, i, arr) {
                    return venue.location.lat / arr.length
                })
                .reduce(function (a, b) {
                    return a + b
                })
            const averageLng = venuesList.map(function (venue, i, arr) {
                    return venue.location.lng / arr.length
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