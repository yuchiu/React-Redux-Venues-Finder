import React from 'react'
import superagent from 'superagent'
import actions from '../../actions/'

class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      newSearch: {
        location: '',
        filter: ''
      }
    }
  }

  //fetch user location once the page is mounted
  componentWillMount() {
    this
      .props
      .fetchAutoLocate();
  }

  handleChange(locOrFil, e) {
    let newSearch = this.state.newSearch
    newSearch[locOrFil] = e.target.value
    this.setState({newSearch: newSearch})
  }

  handleSearch(e) {
    e.preventDefault()
    this
      .props
      .fetchSearch(this.state.newSearch)
    this.setState({
      newSearch: {
        location: '',
        filter: ''
      }
    })
  }

  render() {
    return (
      <div id="search-container">
        <a href="index.html">
          Venues Finder
        </a>
        <p className="">Search for Venues around the world.</p>
        <form className="">
          <div className="">
            <input
              value={this.state.newSearch.location}
              onChange={this
              .handleChange
              .bind(this, 'location')}
              placeholder="Where?"
              className="form-control"
              type="text"/>
            <input
              value={this.state.newSearch.filter}
              onChange={this
              .handleChange
              .bind(this, 'filter')}
              placeholder="gym, coffee, etc.."
              className="form-control"
              type="text"/>
          </div>
          <button
            type="submit"
            onClick={this
            .handleSearch
            .bind(this)}>Search
          </button>
        </form>
      </div>
    )
  }
}

export default Search;