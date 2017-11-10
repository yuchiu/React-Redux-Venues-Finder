import React from 'react'

class Venue extends React.Component {

  render() {
    const venue = this.props.venue
    return (
      <li>
        <div>
          <h4>
            <b>{venue.venue.name}</b>
          </h4>
          <span >
            total checked-in:
            <b>{venue.venue.stats.checkinsCount}</b>
          </span>
          <span >
            {venue.venue.location.address}</span>
          <a href={venue.venue.url}>{venue.venue.url}</a>
        </div>
      </li>
    )
  }
}
export default Venue