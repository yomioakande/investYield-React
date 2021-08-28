import { combineReducers } from 'redux';
import { authentication } from './authenticationReducer';
import { registration } from './registrationReducers';
// import { users } from './usersReducer';
import { alert } from './alertReducers';

const rootReducer = combineReducers({
  authentication,
  registration,
//   users,
  alert
});

export default rootReducer;