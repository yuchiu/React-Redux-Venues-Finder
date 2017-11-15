import React from 'react'
import Map from './Map'

class Index extends React.Component {

  render() {
    return (<Map
      venues={this.props.venues}
      center={this.props.center}
      containerElement={this.props.containerElement}
      mapElement={this.props.mapElement}/>)
  }
}
export default Index