import constants from '../constants'
import axios from 'axios'

const URL = 'https://api.foursquare.com/v2/venues/search'
const API = "MBZIFEYQSPICJ5MAYPJIOL4CHM44DVAPROARKLUVWQXUXGJD"
const SECRET = "SVXG0WJXAEE2QLJLVOO2DHVZUAL1SLKPZP1FOR12BMVTR4PF"
const v = "20140806" //foursquare required version for API call


export default {
    fetchSearch: (searchItem) => {
        return (dispatch) => {
            axios.get(`${URL}/?v=${v}&near=${searchItem.location}&client_id=${API}&client_secret=${SECRET}&query=${searchItem.filter}`)
                .then((response) => {
                    dispatch({
                        type: constants.SEARCH_VENUES,
                        payload: response
                    })
                })

        }
    }
}