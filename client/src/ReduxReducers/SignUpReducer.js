export default function(state=null, action) {
  switch(action.type) {
    case 'SAVE_SIGNIN_INFO':
      console.log('Reducer - saved sign up info');
      return action.payload
      break;
      default:
        return state;
  }
};