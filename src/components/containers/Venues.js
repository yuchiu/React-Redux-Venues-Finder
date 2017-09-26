import React from 'react'
import {connect} from 'react-redux'

class Venues extends React.Component {

  render() {

    return (

      <div>
        <div className="row">
          <div className="col-md-10 ">
            <ol style ={{
              listStyle: 'none'
            }}>
              {this.props.venues.map((venue, i) => {
                return (
                  <li key={venue.id}>
                    <div>
                      <h4
                        className="mt-4 lead"
                        style
                        ={{
                        color: 'teal'
                      }}><b>{venue.name}</b></h4>
                      <span className="lead mt-4 mr-4">
                        total checked-in:
                        <b>{venue.stats.checkinsCount}</b>
                      </span>
                      <span className="lead mt-4 mr-4">
                        {venue.location.address}</span>
                      <a
                        href={venue.url}
                        style
                        ={{
                        color: 'teal'
                      }}>{venue.url}</a>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>

      </div>
    )
  }

}

const stateToProps = (state)=>{
  return {
    venues : state.venues.venueList
  }
}
const dispatchToProps = (dispatch)=>{
  return {}
}


export default connect(stateToProps, dispatchToProps)(Venues);
