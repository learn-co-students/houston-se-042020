class Dog < Animal
    # attr_reader :name
    # attr_accessor :mood
    attr_accessor :breed
    # Create initialize method in Dog class to have breed attribute
    def initialize(name, breed)
        super(name)
        @breed = breed
    end

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