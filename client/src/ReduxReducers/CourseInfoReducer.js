export default function(state={}, action) {
  switch (action.type) {
    case 'TITLE':
      console.log('Title has been updated');
      return Object.assign({}, state, {
        title: action.payload
      });
      break;
    case 'DESCRIPTION':
      console.log('Description has been updated');
      return Object.assign({}, state, {
        description: action.payload,
      })
    break;
    default:
      return state;
  }
}