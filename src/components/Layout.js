import React from 'react';
import TodoList from './containers/TodoList'

class Layout extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="xs-4 mt-4">
          <TodoList/>
        </div>
      </div>

    )
  }

}

export default Layout;
