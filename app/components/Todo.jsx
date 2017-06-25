var React = require('react');

var Todo = React.createClass({
	render: function() {
    var {id, text, completed, onToggleTodo} = this.props;
		return(
			<div id={id} onClick={() => {
        this.props.onToggleTodo(id);
      }}>
        <input type="checkbox" checked={completed}/>
				{text}
			</div>
		)
	}
});

module.exports = Todo;