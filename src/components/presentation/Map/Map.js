import React from 'react'
import {withGoogleMap, GoogleMap} from 'react-google-maps'
import MarkerComponent from './MarkerComponent'
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

    const bounds = new google
      .maps
      .LatLngBounds();
    const markers = this
      .props
      .venues
      .map((venue, i) => {
        const marker = {
          position: {
            lat: venue.venue.location.lat,
            lng: venue.venue.location.lng
          }
        }
        const loc = venue.venue.location.lat
        bounds.extend(marker.position);
        this
          .state
          .map
          .fitBounds(bounds);
        return <MarkerComponent
          key={i}
          markerPosition={marker.position}
          marker={marker}
          venue={venue}/>

      })

    return (
      <GoogleMap
        ref={this
        .mapLoaded
        .bind(this)}
        defaultCenter={this.props.center}
        center={this.props.center}>
        {markers}

      </GoogleMap>
    )
  }
}

export default withGoogleMap(Map);
