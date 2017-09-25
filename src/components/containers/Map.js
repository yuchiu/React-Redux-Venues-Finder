import React from 'react'
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

    const center ={
        lat: 40.728199,
        lng: -73.9894738
      }

    return (

      <GoogleMap
        ref={this
        .mapLoaded
        .bind(this)}
        defaultZoom={14}
        defaultCenter={center}
        center={center}>

      </GoogleMap>
    )
  }

}

export default withGoogleMap(Map);
