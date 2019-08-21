class UsersController < ApplicationController

	def login
		# if the id exists log the user in
		begin
			session[:user] = User.find(params[:id])
		rescue ActiveRecord::RecordNotFound
			session[:user] = []
		end
		render json: session[:user]
	end

	def create
		# create a new user getting name of user from input
	end

	def current
		# get the value of SESSION[:user]
	end

end
