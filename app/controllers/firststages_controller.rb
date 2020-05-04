class FirststagesController < ApplicationController
  def index
    @hero = Hero.find(1)
  end
end
