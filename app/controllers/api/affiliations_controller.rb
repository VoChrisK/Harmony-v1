class Api::AffiliationsController < ApplicationController
    def create
        @affiliation = Affiliation.new(affiliation_params)
        if @affiliation.save
            render json: @affiliation
        else
            render json: @affiliation.errors.full_messages, status: 422
        end
    end

    def find
        @affiliation = Affiliation.find_by(user_id: params[:user_id], server_id: params[:server_id])

        if @affiliation
            @affiliation.destroy
            render json: @affiliation
        else
            render json: ["Cannot find affiliation"], status: 404
        end
    end

    private
    def affiliation_params
        params.require(:affiliation).permit(:user_id, :server_id)
    end
end
