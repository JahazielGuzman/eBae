class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.string :state
      t.integer :price
      t.string :img_url
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
