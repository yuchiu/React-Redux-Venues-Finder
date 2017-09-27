import React from 'react';
import Search from './containers/Search'
import Map from './containers/Map'
import Venues from './containers/Venues'

class Layout extends React.Component {

  render() {
    return (
      <div>
        <Search/>
        <div className='row ml-3 mr-3'>
          <div className=' col-md-6' style={{
            height: 650
          }}>
            <Map
              containerElement={< div style = {
              style.mapElement
            } />}
              mapElement={< div style = {
              style.mapElement
            } />}/>
          </div>
          <div className='col-md-6 '>
            <Venues/>
          </div>
        </div>
      </div>

    )
  }
}

const style = {
  mapElement: {
    height: '100%'
  }
}

export default Layout;
