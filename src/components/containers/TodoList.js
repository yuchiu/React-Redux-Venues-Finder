import React from 'react'
import actions from '../../actions/'
import {connect} from 'react-redux'

class TodoList extends React.Component {

  constructor() {
    super()
    this.state = {
      newTodo: {
        name: '',
        desc: ''
      },
    }
  }

  handleChange(nameOrDesc, e) {
    let newTodo = this.state.newTodo
    newTodo[nameOrDesc] = e.target.value
    this.setState({newTodo: newTodo})
    console.log(e.target.value)
  }
  handleAdd() {
    this.props.addTodo(this.state.newTodo)
    this.setState({
      newTodo: {
        name: '',
        desc: ''
      }
    })

  }
  handleDelete(todoName, e) {

    this.props.deleteTodo(todoName)
  }

  render() {
    let list = this.props.todo.list
    return (
      <div>
        <h3>todo List</h3>
        {list
          .map((item, i) => {
            return <div key={i}>
              {item.name}
              <button
                className="btn-outline-danger"
                onClick={this
                .handleDelete
                .bind(this, item.name)}>delete</button>
            </div>
          })}
        <input
          type="text"
          placeholder="name"
          value={this.state.newTodo.name}
          onChange={this
          .handleChange
          .bind(this, 'name')}/>
        <input
          type="text"
          placeholder="desc"
          value={this.state.newTodo.desc}
          onChange={this
          .handleChange
          .bind(this, 'desc')}/>
        <button
          className="btn-outline-info"
          onClick={this
          .handleAdd
          .bind(this)}>Add Todo</button>
      </div>

    )
  }

}
const stateToProps= (state)=>{
  return {
    todo : state.todo
  } 
}
const dispatchToProps = (dispatch)=>{
  return {
    addTodo : (todo)=>{
      dispatch(actions.addTodo(todo))
    },
    deleteTodo : (todo)=>{
      dispatch(actions.deleteTodo(todo))
    }
  }
}


export default connect(stateToProps, dispatchToProps)(TodoList)