import React from 'react'
import {withGoogleMap, GoogleMap, Marker, InfoWindow} from 'react-google-maps'

class Map extends React.Component {

  constructor() {
    super();
    this.state = {
      map: null,
      windowPosition: null,
      isOpen: false
    }
  }
  mapLoaded(map) {
    if (this.state.map != null) 
      return
    this.setState({map: map})
  }

  onToggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    })
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
        bounds.extend(marker.position);
        this
          .state
          .map
          .fitBounds(bounds);
        return <Marker
          key={i}
          {...marker}
          onClick={this
          .onToggleOpen
          .bind(this)}
          isOpen={this.state.isOpen}>
          {this.state.isOpen && <InfoWindow
            onCloseClick={this
            .onToggleOpen
            .bind(this)}>
            <div>
              {venue.venue.name}
            </div>
          </InfoWindow>}
        </Marker>

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
