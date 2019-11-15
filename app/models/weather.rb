class Weather
	include HTTParty

	default_params units: 'metric', lang: 'ja', appid: '03b628ad1a559a86a57ecd0a788973dc'
	format :json

	def self.current
		base_uri 'http://api.openweathermap.org/data/2.5/weather'
		get("", query: { q: 'tokyo' })
	end

	def self.forecast
		base_uri 'http://api.openweathermap.org/data/2.5/forecast'
		get("", query: { q: 'tokyo' })
	end

end