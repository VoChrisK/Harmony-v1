import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import generalErrorsReducer from './general_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    general: generalErrorsReducer
});

export default errorsReducer;