class Api::ChannelMessagesController < ApplicationController
    def index
        @messages = Channel.includes(:messages).find(params[:channel_message][:channel_id]).messages
        render 'api/messages/index'
    end

    def create
        @channel_message = ChannelMessage.new(channel_message_params)
        if @channel_message.save
            render json: @channel_message
        else
            render json: @channel_message.errors.full_messages, status: 422
        end
    end

    def channel_message_params
        params.require(:channel_message).permit(:message_id, :channel_id)
    end
end
