import React from 'react'
import Venue from './venue'

class Venues extends React.Component {

  render() {

    return (
      <div>
        <ol>
          {this
            .props
            .venues
            .map((venue, i) => {
              return (<Venue key={venue.id} venue={venue}/>)
            })}
        </ol>

      </div>
    )
  }
}

export default Venues;
