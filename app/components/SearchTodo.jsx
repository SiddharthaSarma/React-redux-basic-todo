var React = require('react');
var actions = require('../../actions/index');
var connect = require('react-redux').connect;

var SearchTodo = React.createClass({
  render: function () {
    var showCompleted = this.props.showCompleted;
    var searchTerm = this.props.searchTerm;
    var dispatch = this.props.dispatch;
    return (
      <div>
        <input type="text" placeholder="search todo" value={searchTerm} ref="searchTerm"
          onChange={() => {
            dispatch(actions.searchTodo(this.refs.searchTerm.value));
          }} />
        <input type="checkbox" ref="showCompleted" onChange={() => {
          dispatch(actions.toggleTodoCompleted());
        }} />Show completed
      </div>
    );
  }
});

module.exports = connect((state) => {
  return {
    showCompleted: state.showCompleted,
    searchTerm: state.searchTerm
  }
})(SearchTodo);