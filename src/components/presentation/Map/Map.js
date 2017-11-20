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
    const {props, state} = this, 
    {mapStyles} = props;
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
        options={mapOptions}
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
const mapOptions = {
  // The style is copy from https://snazzymaps.com/style/2/midnight-commander
  styles:[
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 33
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2e5d4"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c5dac6"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c5c6c6"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e4d7c6"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#fbfaf7"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#acbcc9"
            }
        ]
    }
]
}
export default withGoogleMap(Map);
