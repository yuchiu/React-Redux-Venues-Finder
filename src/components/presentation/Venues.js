import React from 'react'
import Venue from './venue'

class Venues extends React.Component {

  render() {

    return (
      <div>
        <div className="row">
          <div className="col-md-10 ">
            <ol style ={style.orderList}>
              {this
                .props
                .venues
                .map((venue, i) => {
                  return (<Venue key={venue.id} venue={venue}/>)
                })}
            </ol>
          </div>
        </div>

      </div>
    )
  }
}
const style = {
  orderList: {
    listStyle: 'none'
  }
}

export default Venues;
