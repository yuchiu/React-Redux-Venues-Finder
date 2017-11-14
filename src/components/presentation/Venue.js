import React from 'react'

class Venue extends React.Component {

  render() {
    const venue = this.props.venue.venue
    const photoUrl = this.props.venue.venue.photos.groups[0].items[0].prefix + "250x250" + this.props.venue.venue.photos.groups[0].items[0].suffix

    const ratingColor = venue.ratingColor
    return (
      <li className="venue-container">
        <img className="venue-photo" src={photoUrl}></img>
        <div className="venue-content">
          <h4 className="venue-title venue-ele">
            <b>{venue.name}</b>
          </h4>
          <div className="same-line">

            <div className="venue-category venue-ele"><b>{venue.categories[0].name}</b></div>
            &nbsp;<b>∙</b>&nbsp;
            <p className="venue-checked-in venue-ele">
            <b>checked In:</b>&nbsp;{venue.stats.checkinsCount}
            </p>
          </div>
          <div className="same-line">
            <div className="venue-phone venue-ele">{venue.contact.formattedPhone}</div>
            &nbsp;<b>∙</b>&nbsp;
            <p className="venue-address venue-ele">
              {venue.location.address}</p>
          </div>
          <p className="venue-description venue-ele"><b>review:</b>&nbsp;{this.props.venue.tips["0"].text}</p>
          <div className="venue-ele">
            <a className="venue-url" href={venue.url} target="_blank">More Info</a>
          </div>
        </div>

      </li>
    )
  }
}
export default Venue