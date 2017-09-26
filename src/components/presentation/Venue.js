import React from 'react'

class Venue extends React.Component {

  render() {
    const venue= this.props.venue
    return (
      <li>
        <div>
          <h4 className="mt-4 lead" style ={{
            color: 'teal'
          }}>
            <b>{venue.name}</b>
          </h4>
          <span className="lead mt-4 mr-4">
            total checked-in:
            <b>{venue.stats.checkinsCount}</b>
          </span>
          <span className="lead mt-4 mr-4">
            {venue.location.address}</span>
          <a href={venue.url} style ={{
            color: 'teal'
          }}>{venue.url}</a>
        </div>
      </li>
    )
  }
}
export default Venue