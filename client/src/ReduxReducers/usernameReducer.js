export default function(state=null, action) {
  switch(action.type) {
    case 'SET_USERNAME':
      return Object.assign({}, state, {
        username: action.payload,
      });
      break;

    default:
      return state;
  }
};