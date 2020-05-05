# Hashes and the Internet

### LGs:

- [x] Recognize the parts of the request-response lifecycle
    * Define client and describe setting up the request
    * Define server and describe how the response is formatted
    * Identify HTML as a response type
    * Identify and define JSON
- [x] Define Application Programming Interface (API)
    * Describe the API of a Ruby Array
    * Explain the uses of an API on the internet
- [x] Practice making requests to an API and parsing and examining the result

---

#### Recognize the parts of the request-response lifecycle
* Define client and describe setting up the request
* Define server and describe how the response is formatted
* Identify HTML as a response type
* Identify and define JSON

#### Define Application Programming Interface (API)
* Describe the API of a Ruby Array
* Explain the uses of an API on the internet

#### Practice making requests to an API and parsing and examining the result
```ruby
    require 'net/http'
    require 'open-uri'
    require 'json'

    url = "https://api.covid19api.com/summary"

    uri = URI.parse(url)
    response = Net::HTTP.get_response(uri)
    data = JSON.parse(response.body)
    
    data["Countries"].each do |c| 
        c1 = Country.create(name: c["Country"])
        Case.create(country_id: c1.id, total: c["TotalConfirmed"], recovered: c[ "TotalRecovered"])
    end
    
    -----------------------------------------------------------------------------------------------
    
    require 'httparty'

    response = HTTParty.get(url)

    response["Countries"].each do |c| 
        c1 = Country.create(name: c["Country"])
        Case.create(country_id: c1.id, total: c["TotalConfirmed"], recovered: c[ "TotalRecovered"])
    end
```

