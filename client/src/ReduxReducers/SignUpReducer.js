const defaultState = {
  firstname: null,
  lastname: null,
  email: null,
  birthday: null,
  bio: null,
  username: null,
};

export default function(state=defaultState, action) {
  switch(action.type) {
    case 'SAVE_SIGNIN_INFO':
      console.log('Reducer - saved sign up info');
      return Object.assign({}, state, {
        state: action.payload,
      });
      break;
      default:
        return state;
  }
};