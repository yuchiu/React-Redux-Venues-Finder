import React from 'react'
import {connect} from 'react-redux'
import {withGoogleMap, GoogleMap, Marker, InfoWindow} from 'react-google-maps'
const bounds = new google.maps.LatLngBounds();

class Map extends React.Component {

  constructor() {
    super();
    this.state = {
      map: null,
      windowPosition: null,
      isOpen: false
    }
  }
  getBound(pos){    
    console.log(pos)
    bounds.extend(pos);
    this.state.map.fitBounds(bounds);
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
        {this.getBound(marker.position)}
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
              {venue.name}
            </div>
          </InfoWindow>}
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
  return {venues: state.venues.venueList, center: state.venues.center, bound: state.venues.bound}
}
const dispatchToProps = (dispatch) => {
  return {}
}

export default connect(stateToProps, dispatchToProps)(withGoogleMap(Map));
