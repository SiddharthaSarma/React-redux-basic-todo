var React = require('react');
var ReactDOM = require('react-dom');

var SearchTodo = require('./SearchTodo.jsx');
var TodoList = require('./TodoList.jsx');
var AddTodo = require('./AddTodo.jsx')


var TodoApp = React.createClass({
	render: function() {
		return (
			<div className="container">
        <SearchTodo />
        <TodoList />
        <AddTodo />
			</div>
		);
	}
});

module.exports = TodoApp;