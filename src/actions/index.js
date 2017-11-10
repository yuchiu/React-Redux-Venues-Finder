import constants from '../constants'
import axios from 'axios'

const URL = 'https://api.foursquare.com/v2/venues/'
const API = "MBZIFEYQSPICJ5MAYPJIOL4CHM44DVAPROARKLUVWQXUXGJD"
const SECRET = "SVXG0WJXAEE2QLJLVOO2DHVZUAL1SLKPZP1FOR12BMVTR4PF"
const v = "20160215" //foursquare required version for API call

const IPURL = "https://ipinfo.io"

let actions = {
    fetchAutoLocate: () => {
        return (dispatch) => {
            //fetch user's location once the page is mounted
            axios.get(IPURL).then((response) => {
                dispatch(actions.fetchSearch({
                    location: response.data.city,
                    filter: ''
                }))
            })
        }
    },
    //for fetching photos
    //https://api.foursquare.com/v2/venues/explore?venuePhotos=1&limit=1&v=20160215&ll=40.745741050065504,-73.98825287818909&client_secret=SVXG0WJXAEE2QLJLVOO2DHVZUAL1SLKPZP1FOR12BMVTR4PF&client_id=MBZIFEYQSPICJ5MAYPJIOL4CHM44DVAPROARKLUVWQXUXGJD&query=Stumptown%20Coffee%20Roasters
    fetchSearch: (searchItem) => {
        return (dispatch) => {
            axios.get(`${URL}search/?v=${v}&near=${searchItem.location}&client_id=${API}&client_secret=${SECRET}&query=${searchItem.filter}&venuePhotos=1`)
                .then((response) => {
                    console.log()
                    dispatch({
                        type: constants.SEARCH_VENUES,
                        payload: response
                    })
                })

        }
    }
}

export default actions;