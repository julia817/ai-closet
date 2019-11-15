class StaticPagesController < ApplicationController
  def home
  	@current_weather = Weather.current
  	@forecast = Weather.forecast
  end
end
