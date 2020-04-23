class User
    attr_reader :user_name

    @@all = []

    def initialize(name)
        @user_name = name 

        @@all << self
    end

    def self.all
        @@all
    end

    def tweets
        Tweet.all.select do |tweet|
            tweet.user == self # obj ==  obj
        end
    #    tArray = Tweet.all.select do |tweet|
    #         tweet.user == self # obj ==  obj
    #    end

    #    tArray.map do |t|
    #     t.message
    #    end
    end

    def tweets_messages
        # self.tweets.map do |tweet|
        #     tweet.message
        # end
        tweets.map do |tweet|
            tweet.message
        end
    end

    def post_tweet(message)
        Tweet.new(message, self)
    end
end

