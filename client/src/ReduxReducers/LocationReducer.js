const defaultState = {
  city: null,
  state: null,
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_CITY':
      return Object.assign({}, state, {
        city: action.payload,

       });
      break;
    case 'UPDATE_STATE':
      return Object.assign({}, state, {
        state: action.payload,
      });
    break;
    default:
      return state;
  }
}