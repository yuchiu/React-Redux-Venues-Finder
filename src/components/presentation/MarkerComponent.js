import React from 'react'
import {Marker, InfoWindow} from 'react-google-maps'

class MarkerComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      windowPosition: null
    }
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

    const thumbnailUrl = this.props.venue.venue.featuredPhotos.items[0].prefix + '80x80' + this.props.venue.venue.featuredPhotos.items[0].suffix
    const markerPosition = this.props.markerPosition
    const marker = this.props.marker
    return (

      <Marker
        {...marker}
        onClick={this
        .toggleInfoWindow
        .bind(this, markerPosition)}>

        {this.state.windowPosition !== null
          ? < InfoWindow
        options = {{pixelOffset: new google.maps.Size(0,-30)}}
        position = {
          this.state.windowPosition
        }
        onCloseClick = {
          this
            .toggleInfoWindow
            .bind(this, null)
        } > <div>
          <img src={thumbnailUrl}/> {this.props.venue.venue.name}
        </div> </InfoWindow>:null}
      </Marker>
    )
  }
}

export default MarkerComponent;
