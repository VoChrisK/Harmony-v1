import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import onlineReducer from './online_reducer';
import userInfoReducer from './user_info_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    status: onlineReducer,
    info: userInfoReducer
});

export default uiReducer;