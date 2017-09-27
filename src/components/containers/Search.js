import React from 'react'
import superagent from 'superagent'
import actions from '../../actions/'
import {connect} from 'react-redux'

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
      <div className="row">
        <div className="col-md-12">
          <div className="jumbotron jumbotron-fluid text-center" style={style.jumbotron}>
            <div className="container" style={style.container}>
              <a className="display-4 " href="index.html" style={style.aTag}>
                Venues Finder
              </a>
              <p className="lead mt-3">Search for Venues around the world.</p>
              <form className="form-inline  justify-content-center">
                <div className="form-group">
                  <input
                    value={this.state.newSearch.location}
                    onChange={this
                    .handleChange
                    .bind(this, 'location')}
                    placeholder="Where?"
                    className="form-control"
                    type="text"
                    style={{
                    width: 300,
                    marginRight: 10
                  }}/>
                  <input
                    value={this.state.newSearch.filter}
                    onChange={this
                    .handleChange
                    .bind(this, 'filter')}
                    placeholder="gym, coffee, etc.."
                    className="form-control"
                    type="text"
                    style={{
                    marginRight: 5
                  }}/>
                </div>
                <button
                  className="btn btn-outline-info"
                  type="submit"
                  onClick={this
                  .handleSearch
                  .bind(this)}>Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const style = {
  jumbotron: {
    background: '#2e3242'
  },
  container: {
    color: '#4ee8e2'
  },
  aTag: {
    color: '#4ee8e2',
    textDecoration: 'none'
  }
}

const stateToProps = (state) => {
  return {}
}

const dispatchToProps = (dispatch) => {
  return {
    fetchAutoLocate: () => {
      dispatch(actions.fetchAutoLocate())
    },
    fetchSearch: (newSearch) => {
      dispatch(actions.fetchSearch(newSearch))
    }
  }
}

export default connect(stateToProps, dispatchToProps)(Search);