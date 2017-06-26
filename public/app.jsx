var React = require('react');
var ReactDOM = require('react-dom');
var redux = require('redux');
var createStore = require('redux').createStore;

var todos = require('../reducers/index');
var showCompleted = require('../reducers/showCompleted');
var searchTerm = require('../reducers/searchTodo');
var actions = require('../actions/index');
var Provider = require('react-redux').Provider;
var TodoHelper = require('../helpers/TodoHelper.js');

var combinedReducer = redux.combineReducers({
  todos: todos,
  showCompleted: showCompleted,
  searchTerm: searchTerm
});

import TodoApp from '../app/components/TodoApp.jsx';

var store = createStore(combinedReducer,   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.dispatch(actions.addTodos(TodoHelper.getTodos()));

store.subscribe(function() {
 TodoHelper.setTodos(store.getState().todos);
});

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>, document.getElementById('app'));
