import React from 'react'
import {connect} from 'react-redux'
import Venue from '../presentation/venue'

class Venues extends React.Component {

  render() {

    return (
      <div>
        <div className="row">
          <div className="col-md-10 ">
            <ol style ={{
              listStyle: 'none'
            }}>
              {this
                .props
                .venues
                .map((venue, i) => {
                  return (<Venue key={venue.id} venue={venue}/>)
                })}
            </ol>
          </div>
        </div>

      </div>
    )
  }
}

const stateToProps = (state) => {
  return {venues: state.venues.venueList}
}
const dispatchToProps = (dispatch) => {
  return {}
}

export default connect(stateToProps, dispatchToProps)(Venues);
