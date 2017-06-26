export var addTodo = function (text) {
  return {
    type: 'ADD_TODO',
    text: text
  }
};
export var addTodos = function (todos) {
  return {
    type: 'ADD_TODOS',
    todos: todos
  }
};
export var toggleTodo = function(id) {
  return {
    type: 'TOGGLE_TODO',
    id: id
  }
};

export var searchTodo = function(text) {
  return {
    type: 'SEARCH_TODO',
    searchTerm: text
  }
};

export var toggleTodoCompleted = function() {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
}