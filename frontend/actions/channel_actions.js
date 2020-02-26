import * as ChannelApiUtil from './../util/channel_api_util';
import { receiveErrors } from './error_actions';

const receiveChannels = channels => {
    return ({
        type: "RECEIVE_CHANNELS",
        channels
    });
};

const receiveChannel = channel => {
    return ({
        type: "RECEIVE_CHANNEL",
        channel
    });
};

const removeChannel = channelId => {
    return ({
        type: "REMOVE_CHANNEL",
        channelId
    });
};

export const requestChannels = (serverId) => dispatch => {
    return ChannelApiUtil.fetchChannels(serverId).then(
        channels => dispatch(receiveChannels(channels))
    );
};

export const requestChannel = channelId => dispatch => {
    return ChannelApiUtil.fetchChannel(channelId).then(
        channel => dispatch(receiveChannel(channel))
    );
};

export const createChannel = channel => dispatch => {
    return ChannelApiUtil.createChannel(channel).then(
        newChannel => dispatch(receiveChannel(newChannel)),
        errors => dispatch(receiveErrors(errors.responseJSON))
    );
};

export const updateChannel = channel => dispatch => {
    return ChannelApiUtil.updateChannel(channel).then(
        newChannel => dispatch(receiveChannel(newChannel)),
        errors => dispatch(receiveErrors(errors.responseJSON))
    );
};

export const deleteChannel = channelId => dispatch => {
    return ChannelApiUtil.deleteChannel(channelId).then(
        () => dispatch(removeChannel(channelId))
    );
};

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";