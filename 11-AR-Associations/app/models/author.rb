class Author < ActiveRecord::Base
    has_many :books

    # def books
    #     Book.all.select{|book| book.author_id == self.id}
    # end

end