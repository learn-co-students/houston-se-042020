Book.destroy_all

response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=ruby+programming")

books = JSON.parse(response)

books["items"].each do |book|
    Book.create(title: book["volumeInfo"]["title"], year: book["volumeInfo"]["publishedDate"])
end