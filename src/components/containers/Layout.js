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
        <div id="sidebar">
          <div id="map-container">
            <Map
              venues={this.props.venues}
              center={this.props.center}
              containerElement={< div className = "map-element" />}
              mapElement={< div className = "map-element" />}/>
          </div>

        </div>

        <Search
          fetchAutoLocate={this.props.fetchAutoLocate}
          fetchSearch={this.props.fetchSearch}/>
        <Venues venues={this.props.venues}/>
      </div>

    )
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
