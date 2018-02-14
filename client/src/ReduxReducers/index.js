import { combineReducers } from 'redux';
import LocationReducer from './LocationReducer.js';
import SignUpReducer from './SignUpReducer';
import dateCourseInfo from './CourseInfoReducer';
import LoginReducer from './LoginReducer';
//import an combine reducers here!!

const allreducers = combineReducers({
  location: LocationReducer,
  signUpData: SignUpReducer,
  dateCourseInfo: dateCourseInfo,
  loginData: LoginReducer,
});

export default allreducers;
