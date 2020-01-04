class CreateHeros < ActiveRecord::Migration[5.2]
  def change
    create_table :heros do |t|
      t.string :name, null: false
      t.integer :hp, null: false
      t.integer :mp, null: false
      t.integer :attack, null: false
      t.integer :defence, null: false
      t.integer :magic_attack, null: false
      t.integer :magic_defence, null: false
      t.integer :speed, null: false
      t.timestamps
    end
  end
end
