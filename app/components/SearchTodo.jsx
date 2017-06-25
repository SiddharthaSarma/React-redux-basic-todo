var React = require('react');

var SearchTodo = React.createClass({
	searchTodo: function() {
		var {searchTerm, showCompleted} = this.refs;
		this.props.onSearchTodo(searchTerm.value, showCompleted.checked);
	},
 	render: function() {
    return (
      <div>
        <input type="text" placeholder="search todo" ref="searchTerm" onChange={this.searchTodo}/>
        <input type="checkbox" ref="showCompleted" onChange={this.searchTodo}/>Show completed
      </div>
    );
  }
});

module.exports = SearchTodo;