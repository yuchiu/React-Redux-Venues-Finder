import React from 'react';
import Search from '../presentation/Search'
import Map from '../presentation/Map'
import Venues from '../presentation/Venues'
import actions from '../../actions'
import {connect} from 'react-redux'

class Layout extends React.Component {

  render() {
    return (
      <div>
        <Search
          fetchAutoLocate={this.props.fetchAutoLocate}
          fetchSearch={this.props.fetchSearch}/>
        <div className='row ml-3 mr-3'>
          <div className=' col-md-6' style={style.mapContainer}>
            <Map
              venues={this.props.venues}
              center={this.props.center}
              containerElement={< div style = {
              style.mapElement
            } />}
              mapElement={< div style = {
              style.mapElement
            } />}/>
          </div>
          <div className='col-md-6 '>
            <Venues venues={this.props.venues}/>
          </div>
        </div>
      </div>

    )
  }
}

const style = {
  mapContainer: {
    height: 700
  },
  mapElement: {
    height: '100%'
  }
}

const stateToProps = (state) => {
  return {venues: state.venues.venueList, center: state.venues.center}
}

const dispatchToProps = (dispatch) => {
  return {
    fetchAutoLocate: () => {
      dispatch(actions.fetchAutoLocate())
    },
    fetchSearch: (newSearch) => {
      dispatch(actions.fetchSearch(newSearch))
    }
  }
}

export default connect(stateToProps, dispatchToProps)(Layout);
