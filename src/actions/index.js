import constants from '../constants'


export default {
    addTodo: (todoItem)=>{
        return {
            type: constants.ADD_TODO,
            payload : todoItem
        }
    },
    deleteTodo: (todoItem)=>{
        return {
            type: constants.DELETE_TODO,
            payload : todoItem
        }
    }
}