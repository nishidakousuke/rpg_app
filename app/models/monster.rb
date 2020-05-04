class Monster
  attr_accessor :name, :hp, :attack, :defence, :speed

  def initialize(name: nil, hp: nil, attack: nil, defence: nil, speed: nil)
    @name = name
    @hp = hp
    @attack = attack
    @defence = defence
    @speed = speed
  end

  def normal_attack
    "攻撃#{attack}"
  end

  def power_attack
    "強攻撃#{attack + 50}"
  end
end