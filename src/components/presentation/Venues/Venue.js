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
            &nbsp;|&nbsp;
            <p className="venue-checked-in venue-ele">
              Checked In:&nbsp;{venue.stats.checkinsCount}
            </p>
          </div>
          <div className="same-line">
            <p className="venue-address venue-ele">
              {venue.location.address}</p>
          </div>
          <p className="venue-description venue-ele">
            Recent Review:&nbsp;{this.props.venue.tips["0"].text}</p>
          <div className="same-line">
            <div className="venue-icon-container">
              <a className="venue-url" href={venue.url} target="_blank">
                <i className="fa fa-external-link fa-2x" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>

      </li>
    )
  }
}
export default Venue