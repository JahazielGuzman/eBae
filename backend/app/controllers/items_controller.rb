class ItemsController < ApplicationController

	def index
		if params[:search]
			search_query = "%" + params[:search].split(' ').join('%') + "%"
			items = Item.where("name LIKE ?", search_query)
			items = items.map{|item| {id: item.id, name: item.name, description: item.description, 
					price: item.price,state: item.state, img_url: item.img_url,
					user: item.user
					}
			}
		else
			items = Item.all
		end
		render json: items
	end

	def update
			begin
				user = User.find(params[:user_id])
				item = Item.find(params[:item_id])
				item.user = user
				item.save
				response = "success"
			rescue
				response = "failure"
			end
			render json: {response: response}
	end

	def create
		
	end

	def def new
		item = Item.new
	end
	

	def create
		item = Item.create(item_params)

		render json: item
	end

	def item_params
		params.require(:item).permit(:name, :description, :price, :img_url, :user_id, :state)
	end

end