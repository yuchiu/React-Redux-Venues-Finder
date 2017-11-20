import React from 'react'
import SearchForm from './SearchForm'

class Search extends React.Component {
  render() {
    return (
      <div id="search-container">
        <a id="search-title" href="/">
          Travel <b>Hotspots</b> <i className="fa fa-location-arrow" aria-hidden="true"></i>
        </a>
        <SearchForm
          fetchAutoLocate={this.props.fetchAutoLocate}
          fetchSearch={this.props.fetchSearch}/>
      </div>
    )
  }
}

export default Search;