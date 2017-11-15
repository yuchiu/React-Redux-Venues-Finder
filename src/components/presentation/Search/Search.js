import React from 'react'
import SearchForm from './SearchForm'

class Search extends React.Component {
  render() {
    return (
      <div id="search-container">
        <a id="search-title" href="index.html">
          Venues Finder
        </a>
        <p id="search-p">Search for Venues around the world.</p>
        <SearchForm
          fetchAutoLocate={this.props.fetchAutoLocate}
          fetchSearch={this.props.fetchSearch}/>
      </div>
    )
  }
}

export default Search;