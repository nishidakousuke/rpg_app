class BattlesController < ApplicationController
  def index
    @hero = Hero.find(1)

    slime = Monster.new("スライム", 20)
    goblin = Monster.new("ゴブリン", 30)
    matango = Monster.new("マタンゴ", 25)
    @monsters = [slime, goblin, matango]
  end
end
