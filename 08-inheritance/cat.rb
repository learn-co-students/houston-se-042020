class Cat < Animal
    # attr_reader :name
    # attr_accessor :mood

    attr_accessor :age
    
    def initialize(name, age)
      super(name)
      @age = age
    end
    
end