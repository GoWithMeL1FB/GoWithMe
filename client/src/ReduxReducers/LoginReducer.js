export default function(state=null, action) {
  switch(action.type) {
    case 'SAVE_LOGIN_INFO':
      return Object.assign({}, state, {
        UN: action.payload,
      });
      break;
      default:
        return state;
  }
};