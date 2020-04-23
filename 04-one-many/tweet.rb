class Tweet
    attr_accessor :message, :user

    @@all = []

    def initialize(message, user)
        @message = message
        @user = user

        @@all << self
    end

    def self.all
        @@all
    end

end

