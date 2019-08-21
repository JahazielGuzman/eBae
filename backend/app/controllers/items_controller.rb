class ItemsController < ApplicationController

	def index
		search_query = "%" + params[:search].split(' ').join('%') + "%"
		items = Item.where("name LIKE ?", search_query)
		items = items.map{|item| {id: item.id, name: item.name, description: item.description, 
															price: item.price,state: item.state, img_url: item.img_url,
															user: item.user
															}
														}
		render json: items
	end

	def update
		buyer = User.find(params[:user_id])
		item = User.find(params[:item_id])
		item.user = buyer
	end
end