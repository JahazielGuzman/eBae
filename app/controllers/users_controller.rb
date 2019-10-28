class UsersController < ApplicationController

	def login
		# if the id exists log the user in
		begin
			user = User.find(params[:id])
		rescue ActiveRecord::RecordNotFound
			user = []
		end
		render json: user
	end

	def create
		# create a new user getting name of user from input
	end

	def show
		render json: session[:user]
	end

	def bought_items
		render json: Item.where(user_id: params[:id], state: "bought")
	end	

	def selling_items
		render json: Item.where(user_id: params[:id], state: "sell")
	end

end
