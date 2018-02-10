export default function(state=null, action) {
  switch(action.type) {
    case 'SAVE_SIGNUP_INFO':
      return Object.assign({}, state, {
        username: action.payload,
      });
      break;
      default:
        return state;
  }
};