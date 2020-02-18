import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import onlineReducer from './online_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    status: onlineReducer
});

export default uiReducer;