import React from 'react'
import {connect} from 'react-redux'
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
const {LatLng, LatLngBounds} = google.maps;

class Map extends React.Component {

  constructor() {
    super();
    this.state = {
      map: null
    }
  }
  mapLoaded(map) {
    if (this.state.map != null) 
      return
    this.setState({map: map})
  }

  render() {
    const markers = this
      .props
      .venues
      .map((venue, i) => {
        const marker = {
          position: {
            lat: venue.location.lat,
            lng: venue.location.lng
          }
        }
        return <Marker key={i} {...marker}/>

      })

    return (

      <GoogleMap
        ref={this
        .mapLoaded
        .bind(this)}
        defaultZoom={15}
        defaultCenter={this.props.center}
        center={this.props.center}>
        {markers}
      </GoogleMap>
    )
  }
}

const stateToProps = (state) => {
  return {venues: state.venues.venueList, center: state.venues.center}
}
const dispatchToProps = (dispatch) => {
  return {}
}

export default connect(stateToProps, dispatchToProps)(withGoogleMap(Map));
