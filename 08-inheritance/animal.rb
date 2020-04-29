class Animal

    attr_reader :name
    attr_accessor :mood
    
    def initialize(name)
      @name = name
      @mood = 'nervous'
    end

    def say_hi
        p "I am saying hi to an animal!!"
    end

    def random
        return [1,2,3,4,5,6].sample
    end

end
  