import React from 'react'

class Venue extends React.Component {

  render() {
    const venue = this.props.venue.venue
    const photoUrl = this.props.venue.venue.photos.groups[0].items[0].prefix + "300x300" + this.props.venue.venue.photos.groups[0].items[0].suffix


    return (
      <li className="venue-container">
        <img className="venue-photo"src={photoUrl}></img>
        {/* <img className="venue-photo"src={thumbnailUrl}></img> */}
        <h4>
          <b>{venue.name}</b>
        </h4>

        <div></div>

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