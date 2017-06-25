var React = require('react');
var ReactDOM = require('react-dom');
var uuidv1 = require('uuid/v1');

var AddTodo = require('./AddTodo.jsx')
var TodoList = require('./TodoList.jsx');
var SearchTodo = require('./SearchTodo.jsx');

var TodoAPI = require('../../api/TodoAPI.js')

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchTerm: '',
      todos: TodoAPI.getTodos()
    }
  },
  componentDidUpdate: function() {
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo: function(text) {
    this.setState({
      todos :[
        ...this.state.todos,
        {
          id: uuidv1(),
          text: text,
          completed: false
        }
      ]
    });
  },
  handleOnToggleTodo: function(id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  },
  handleSearchTodo: function(searchTerm, showCompleted) {
    this.setState({
      showCompleted: showCompleted,
      searchTerm : searchTerm
    });
  },
	render: function() {
    var {todos, showCompleted, searchTerm} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchTerm);
		return (
			<div className="container">
        <SearchTodo onSearchTodo={this.handleSearchTodo}/>
        <TodoList todos={filteredTodos} onToggle={this.handleOnToggleTodo}/>
        <AddTodo addTodo={this.handleAddTodo}/>
			</div>
		);
	}
});

module.exports = TodoApp;