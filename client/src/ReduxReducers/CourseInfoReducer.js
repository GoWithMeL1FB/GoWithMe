export default function(state={}, action) {
  switch (action.type) {
    case 'TITLE':
      return Object.assign({}, state, {
        title: action.payload
      });
      break;

    case 'DESCRIPTION':
      return Object.assign({}, state, {
        description: action.payload,
      })
    break;

    case 'IMAGE':
      return Object.assign({}, state, {
        image: action.payload,
      })
    break;

    default:
      return state;
  }
}