import { combineReducers } from 'redux';
import LocationReducer from './LocationReducer.js';
import usernameReducer from './usernameReducer.js';
import dateCourseInfo from './CourseInfoReducer';
//import an combine reducers here!!

const allreducers = combineReducers({
  location: LocationReducer,
  username: usernameReducer,
  dateCourseInfo: dateCourseInfo,
});

export default allreducers;
