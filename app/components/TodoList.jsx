var React = require('react');
var Todo = require('./Todo.jsx');
var TodoHelper = require('../../helpers/TodoHelper.js');
var connect = require('react-redux').connect;

var TodoList = React.createClass({
  render: function () {
    var todos = this.props.todos;
    var showCompleted = this.props.showCompleted;
    var searchTerm = this.props.searchTerm;
    var renderTodos = function () {
      return TodoHelper.filterTodos(todos, showCompleted, searchTerm).map(function(todo){
        return (
          <Todo key={todo.id} {...todo} />
        );
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = connect((state) => {
  return {
    ...state
  }
})(TodoList);