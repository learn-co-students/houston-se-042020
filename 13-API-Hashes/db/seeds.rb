Country.destroy_all
Case.destroy_all

# require 'net/http'
# require 'open-uri'

# Country.create(name: "my country")
# Case.create()


url = "https://api.covid19api.com/summary"

# uri = URI.parse(url)
# response = Net::HTTP.get_response(uri)
# data = JSON.parse(response.body)

response = HTTParty.get(url)

response["Countries"].each do |c| 
    c1 = Country.create(name: c["Country"])
    Case.create(country_id: c1.id, total: c["TotalConfirmed"], recovered: c[ "TotalRecovered"])
end

#  Case.create(country_id: Conutry.all.sample.id, total: c["TotalConfirmed"], recovered: c[ "TotalRecovered"])

# binding.pry
# 0
