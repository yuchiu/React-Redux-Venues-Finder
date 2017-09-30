import React from 'react'
import {connect} from 'react-redux'
import {withGoogleMap, GoogleMap, Marker, InfoWindow} from 'react-google-maps'
const {LatLng, LatLngBounds} = google.maps;

class Map extends React.Component {

  constructor() {
    super();
    this.state = {
      map: null,
      windowPosition: null
    }
  }
  mapLoaded(map) {
    if (this.state.map != null) 
      return
    this.setState({map: map})
  }
  toggleInfoWindow(loc) {
    console.log('marker clicked ' + JSON.stringify(loc))
    if (loc == null) {
      this.setState({windowPosition: null})
      return
    }
    // otherwise get coords of clicked marker and set to state
    let markerLoc = {
      lat: loc.lat,
      lng: loc.lng
    }
    this.setState({windowPosition: markerLoc})
    console.log(this.state.windowPosition)
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
        return <Marker
          key={i}
          {...marker}
      onClick={this.props.onToggleOpen}>
          
      <InfoWindow onCloseClick={this.props.onToggleOpen}>
        <div>
          {" sda"}
          Controlled zoom: {15}
        </div>
      </InfoWindow>
          </Marker>

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
