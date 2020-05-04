def userInfo
    name = $prompt.ask("What is your name?")
    password = $prompt.mask("What is your password?")
    displayInfo(name,password)
end

def displayInfo(name, password)
    p "Hi #{name}!! Your password is #{password}"
end