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
              containerElement={< div style = {{height:100+'%'}}/>}
              mapElement={< div style = {{height:100+'%'}}/>}/>
          </div>
          <div className='col-md-6 '>
            <Venues/>
          </div>
        </div>
      </div>

    )
  }
}

export default Layout;
