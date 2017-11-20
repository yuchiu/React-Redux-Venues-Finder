import React from 'react'
import actions from '../../../actions/'

class SearchForm extends React.Component {
  constructor() {
    super()
    this.state = {
      newSearch: {
        location: '',
        filter: ''
      }
    }
  }

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
    if(this.state.newSearch.location!==''){
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

    else{
      alert("location can't be blank.")
    }
  }

  render() {
    return (
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
          placeholder="park, coffee, etc.."
          type="text"/>
        <button
          id="search-btn"
          type="submit"
          onClick={this
          .handleSearch
          .bind(this)}>Search <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    )
  }
}

export default SearchForm;