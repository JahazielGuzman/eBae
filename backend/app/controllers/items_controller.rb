class ItemsController < ApplicationController

	def index
		search_query = "%" + params[:search].split(' ').join('%') + "%"
		items = Item.where("name LIKE ?", search_query)
		render json: items
	end

	def update
		buyer = User.find(params[:user_id])
		item = User.find(params[:item_id])
		item.user = buyer
	end
end
