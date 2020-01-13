class Api::MessagesController < ApplicationController
    def index
        # @messages = Channel.find(params[:channel][:id]).messages
        @messages = Channel.includes(:messages).find(params[:channel][:id]).messages
        render :index
    end

    def create
        @message = Message.new(message_params)
        if @message.save
            channel = Channel.find(params[:channel][:id])
            render json: ["Channel not found"], status: 404 unless channel
            @message.channel = channel
            ActionCable.server.broadcast 'channel_channel', author: @message.author, body: @message.body, date: @message.created_at.localtime.strftime("%m/%d/%Y"), time: @message.created_at.localtime.strftime("%I:%M:%S %p")
            render :show
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
