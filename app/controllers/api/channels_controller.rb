class Api::ChannelsController < ApplicationController
    def index
        @channels = Server.find(params[:server][:id]).channels
        render :index
    end

    def show
        @channel = Channel.find(params[:id])
        render :show
    end

    def create
        @channel = Channel.new(channel_params)
        if @channel.save
            render @channel
        else
            render @channel.errors.full_messages, status: 422
        end
    end

    def update
        @channel = Channel.find(params[:id])
        render json: ["Cannot find channel"], status: 404 unless @channel
        if @channel.update(channel_params)
            render :show
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def destroy
        @channel = Channel.find(params[:id])
        @channel.destroy
        render json: @channel
    end

    private
    def channel_params
        params.require(:channel).permit(:name, :server_id)
    end
end
