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
        <a id="search-title" href="index.html">
          Venues Finder
        </a>
        <p id="search-p">Search for Venues around the world.</p>
        <form id="search-form">
          <input
            className="search-input"
            id="search-input-location"
            value={this.state.newSearch.location}
            onChange={this
            .handleChange
            .bind(this, 'location')}
            placeholder="Where?"
            type="text"/>
          <input
            className="search-input"
            id="search-input-filter"
            value={this.state.newSearch.filter}
            onChange={this
            .handleChange
            .bind(this, 'filter')}
            placeholder="gym, coffee, etc.."
            type="text"/>
          <button
            id="search-btn"
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