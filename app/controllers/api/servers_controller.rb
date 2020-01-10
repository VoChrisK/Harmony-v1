class Api::ServersController < ApplicationController
    def index
        @servers = Server.all
        render :index
    end

    def show
        @server = Server.find(params[:id])
        render :show
    end

    def create
        @server = Server.new(server_params)
        if @server.save
            Channel.create(name: "General", server_id: @server.id)
            render :show
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def update
        @server = Server.find(params[:id])
        render json: ["Cannot find server"], status: 404 unless @server
        if @server.update(server_params)
            render json: @server
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def destroy
        @server = Server.find(params[:id])
        @server.destroy
        render json: @server
    end

    private
    def server_params
        params.require(:server).permit(:name, :owner_id)
    end
end
