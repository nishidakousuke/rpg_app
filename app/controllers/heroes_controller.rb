class HeroesController < ApplicationController
  def index
  end

  def new
    @hero = Hero.new
  end

  def create
    @hero = Hero.new(hero_params)
    if @hero.save
      redirect_to root_path
    else
      redirect_to new_hero_path
    end
  end

  private

  def hero_params
    params.require(:hero).permit(:name, :hp, :mp, :attack, :defence, :magic_attack, :magic_defence, :speed)
  end
end
