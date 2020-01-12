class Api::MessagesController < ApplicationController
    def index
        @messages = Message.all
        render @messages 
    end

    def create
        @message = Message.new(message_params)
        if @message.save
            ActionCable.server.broadcast 'channel_channel', message: @message
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    def update
        @message = Message.find(params[id])
        render json: ["Cannot find channel"], status: 404 unless @channel
        if @channel.update(channel_params)
            render @channel
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def destroy
        @channel = Channel.find(params[:id])
        @channel.destroy
        redner @channel
    end

    private
    def message_params
        params.require(:message).permit(:body, :author_id)
    end
end
