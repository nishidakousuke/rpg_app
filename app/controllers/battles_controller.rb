class BattlesController < ApplicationController
  def index
    @hero = Hero.find(1)
    slime = Slime.new(name: "スライム", hp: 50, attack: 50, defence: 50, speed: 40)
    goblin = Goblin.new(name: "ゴブリン",hp: 70, attack: 70, defence: 70, speed: 70)
    matango = Matango.new(name: "マタンゴ",hp: 60, attack: 60, defence: 60, speed: 60)
    @monsters = [slime, goblin, matango]
  end
end
