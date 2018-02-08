import { combineReducers } from 'redux';
import LocationReducer from './LocationReducer.js';
//import an combine reducers here!!

const allreducers = combineReducers({
  location: LocationReducer,
});

export default allreducers;
