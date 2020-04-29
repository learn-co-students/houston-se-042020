class Dog < Animal
    # attr_reader :name
    # attr_accessor :mood
    
    # def initialize(name)
    #   @name = name
    #   @mood = 'nervous'
    # end

    def say_hi
        # super
        # p super+"Hi, I am a dog!!"
        p "Hi, I am a dog!!"
        super
        super
    end

    def random
        num = super
        p num
    end

end