import React from 'react'

class Venue extends React.Component {

  render() {
    const venue = this.props.venue.venue
    const photoUrl = this.props.venue.venue.photos.groups[0].items[0].prefix+"300x300"+this.props.venue.venue.photos.groups[0].items[0].suffix
    return (
      <li>
          <img src={photoUrl}></img>
          <h4>
            <b>{venue.name}</b>
          </h4>
          <span >
            total checked-in:
            <b>{venue.stats.checkinsCount}</b>
          </span>
          <span >
            {venue.location.address}</span>
          <a href={venue.url}>{venue.url}</a>
      </li>
    )
  }
}
export default Venue