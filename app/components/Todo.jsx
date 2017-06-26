var React = require('react');
var actions = require('../../actions/index');
var connect = require('react-redux').connect;

var Todo = React.createClass({
	render: function() {
    var {id, text, completed, onToggleTodo} = this.props;
		return(
			<div id={id} onClick={() => {
        this.props.dispatch(actions.toggleTodo(id));
      }}>
        <input type="checkbox" checked={completed} />
				{text}
			</div>
		)
	}
});

module.exports = connect()(Todo);