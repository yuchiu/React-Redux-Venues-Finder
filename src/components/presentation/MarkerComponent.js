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
          ? <InfoWindow
        position = {
          this.state.windowPosition
        }
        onCloseClick = {
          this
            .toggleInfoWindow
            .bind(this, null)
        }><div className="info-windows">
          <img className="info-img info-ele" src={thumbnailUrl}/> 
          <p className="info-title info-ele">{this.props.venue.venue.name}</p>
          <p className="info-address info-ele">{this.props.venue.venue.location.address}</p>
        </div>
        </InfoWindow>:null}
      </Marker>
    )
  }
}

export default MarkerComponent;
