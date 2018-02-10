import { combineReducers } from 'redux';
import LocationReducer from './LocationReducer.js';
import SignUpReducer from './SignUpReducer.js';
//import an combine reducers here!!

const allreducers = combineReducers({
  location: LocationReducer,
  username: SignUpReducer,
});

export default allreducers;
