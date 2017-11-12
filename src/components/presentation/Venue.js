import React from 'react'

class Venue extends React.Component {

  render() {
    const venue = this.props.venue.venue
    const photoUrl = this.props.venue.venue.photos.groups[0].items[0].prefix + "300x300" + this.props.venue.venue.photos.groups[0].items[0].suffix


    return (
      <li className="venue-container">
        <img className="venue-photo"src={photoUrl}></img>
        {/* <img className="venue-photo"src={thumbnailUrl}></img> */}
        <h4 className="venue-title venue-ele">
          <b>{venue.name}</b>
        </h4>

        <div></div>

        <p className="venue-checked-in venue-ele">
          Checked In: <b>{venue.stats.checkinsCount}</b>
        </p>
        <p className="venue-address venue-ele">
          {venue.location.address}</p>
        <a className="venue-url venue-ele" href={venue.url}>More Info</a>
      </li>
    )
  }
}
export default Venue