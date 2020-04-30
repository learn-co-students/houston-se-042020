require 'pry'
require 'sqlite3'

db = SQLite3::Database.new("chinook.db") #path of the database

name = "Eric Johnson"
id = 2


db.execute("UPDATE original_fans SET name = ? WHERE id = ?", name, id)

binding.pry
0