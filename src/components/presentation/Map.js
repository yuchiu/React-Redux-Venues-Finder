import React from 'react'
import {withGoogleMap, GoogleMap, Marker, InfoWindow} from 'react-google-maps'

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
    if (loc == null) {
      this.setState({windowPosition: null})
      return
    }
    this.setState({windowPosition: loc})
    console.log(loc)
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

        const thumbnailUrl = venue.venue.featuredPhotos.items[0].prefix + '80x80' + venue.venue.featuredPhotos.items[0].suffix
        const loc = venue.venue.location.lat
        bounds.extend(marker.position);
        this
          .state
          .map
          .fitBounds(bounds);
          console.log('this.state.windowPosition: '+this.state.windowPosition)
        return <Marker
          key={i}
          {...marker}
          onClick={this
          .toggleInfoWindow
          .bind(this, marker.position)}>

          {this.state.windowPosition!==null ?< InfoWindow
          options = {{pixelOffset: new google.maps.Size(0,-30)}}
          position = {
            this.state.windowPosition
          }
          onCloseClick = {
            this
              .toggleInfoWindow
              .bind(this, null)
          } > <div>
            <img src={thumbnailUrl}/> {venue.venue.name}
          </div> </InfoWindow>:null}
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
