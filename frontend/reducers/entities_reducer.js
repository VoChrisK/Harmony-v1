import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import serversReducer from './servers_reducer';
import channelsReducer from './channels_reducer';
import messagesReducer from './messages_reducer';
import privateServersReducer from './private_server_reducer';
import friendsReducer from './friends_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    servers: serversReducer,
    privateServers: privateServersReducer,
    channels: channelsReducer,
    messages: messagesReducer,
    friends: friendsReducer
});

export default entitiesReducer;