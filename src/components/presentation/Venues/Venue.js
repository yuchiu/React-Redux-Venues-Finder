import React from 'react'

class Venue extends React.Component {

  render() {
    const venue = this.props.venue.venue
    const photoUrl = this.props.venue.venue.photos.groups[0].items[0].prefix + "300x300" + this.props.venue.venue.photos.groups[0].items[0].suffix

    const ratingColor = venue.ratingColor
    return (
      <li className="venue-container">
        <img className="venue-photo" src={photoUrl}></img>
        <div className="venue-content">
          <h4 className="venue-title venue-ele">
            {venue.name}
          </h4>
          <div className="same-line">

            <div className="venue-category venue-ele">
              {venue.categories[0].name}
            </div>
            &nbsp;|&nbsp;
            <div className="venue-phone venue-ele">{venue.contact.formattedPhone}</div>
          </div>
          <div className="same-line">
            <p className="venue-address venue-ele">
              {venue.location.formattedAddress[0]}</p>
          </div>

          <div className="venue-icon-line">
            <a className="venue-url" href={venue.url} target="_blank">
              <i className="fa fa-external-link fa-2x" aria-hidden="true"></i>
            </a>
            <p className="venue-rating">
              <i className="fa fa-star fa-2x" aria-hidden="true"></i>{venue.rating}
            </p>
            <p className="venue-checked-in venue-ele">
              <i className="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>Checked In: {venue.stats.checkinsCount}
            </p>
          </div>
          
        </div>

      </li>
    )
  }
}
export default Venue