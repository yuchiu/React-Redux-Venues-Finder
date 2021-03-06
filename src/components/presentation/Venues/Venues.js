import React from 'react'
import Venue from './venue'

class Venues extends React.Component {

  render() {
    return (
      <ul id="venue-list-container">
        {this
          .props
          .venues
          .map((venue, i) => {
            return (<Venue key={venue.venue.id} venue={venue}/>)
          })}
      </ul>
    )
  }
}

export default Venues;
