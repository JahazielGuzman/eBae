class ItemsController < ApplicationController

	def index
		if params[:search]
			search_query = "%" + params[:search].split(' ').join('%') + "%"
			# only include items that are being sold
			items = Item.where("LOWER(name) LIKE LOWER(?)", search_query)
		else
			items = Item.where(state: "sell")
		end

		# check for params[:user_id], if it is populated then change query to 
		# return items that are not being sold by the user
		if params[:user_id]
			items = items.where.not(user_id: params[:user_id])
		end

		items = items.map{|item| 
				{
					id: item.id, 
					name: item.name, 
					description: item.description, 
					price: item.price,state: item.state, 
					img_url: item.img_url,
					user_id: item.user.id, 
					user_name: item.user.name
				}
		}

		render json: items
	end

	def update
			begin
				user = User.find(params[:user_id])
				item = Item.find(params[:item_id])
				item.user = user
				item.state = "bought"
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