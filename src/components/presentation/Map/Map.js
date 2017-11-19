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
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#e9e5dc"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#b8cb93"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ccdca1"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#ff0000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 99
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#808080"
            },
            {
                "lightness": 54
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#767676"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "saturation": 43
            },
            {
                "lightness": -11
            },
            {
                "color": "#89cada"
            }
        ]
    }
]
}
export default withGoogleMap(Map);
