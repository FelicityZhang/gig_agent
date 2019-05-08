class AddPriceToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :price, :string
  end
end
