var showCompleted = function (state, action) {
  state = state || false;
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  };
}
module.exports = showCompleted;