var uuidv1 = require('uuid/v1');
var todos = function (state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuidv1(),
          text: action.text,
          completed: false
        }
      ];
    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos
      ];
    case 'TOGGLE_TODO':
      return state.map(function (todo) {
        var completed = todo.completed;
        if (todo.id === action.id) {
          var completed = !todo.completed;
        }
        return {
          ...todo,
          completed: completed
        }
      });
    default:
      return state;
  };
};
module.exports = todos;