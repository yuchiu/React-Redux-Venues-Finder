import constants from '../constants'
import axios from 'axios'

const URL = 'https://api.foursquare.com/v2/venues/search'
const API = "MBZIFEYQSPICJ5MAYPJIOL4CHM44DVAPROARKLUVWQXUXGJD"
const SECRET = "SVXG0WJXAEE2QLJLVOO2DHVZUAL1SLKPZP1FOR12BMVTR4PF"
const v = "20140806" //foursquare required version for API call

const IPURL = "https://ipinfo.io"

let actions = {
    fetchAutoLocate: () => {
        return (dispatch) => {
            axios.get(IPURL).then((response) => {
                dispatch(actions.fetchSearch({
                    location: response.data.city,
                    filter: ''
                }))
            })
        }
    },


    fetchSearch: (searchItem) => {
        return (dispatch) => {
            axios.get(`${URL}/?v=${v}&near=${searchItem.location}&client_id=${API}&client_secret=${SECRET}&query=${searchItem.filter}`)
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