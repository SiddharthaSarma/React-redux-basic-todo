var searchTodo = function (state, action) {
  state = state || '';
  switch (action.type) {
    case 'SEARCH_TODO':
      return action.searchTerm;
    default:
      return state;
  };
};
module.exports = searchTodo;
