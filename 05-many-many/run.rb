require 'pry'
require 'require_all'

require_all 'lib'
# require_relative 'lib/doctor.rb'
# require_relative 'lib/patient.rb'
# require_relative 'lib/appointment.rb'

d1 = Doctor.new("Dr. William")
d2 = Doctor.new("Dr. Bill")
d3 = Doctor.new("Dr. Jeannifer")

p1 = Patient.new("Sia")
p2 = Patient.new("Ria")
p3 = Patient.new("Kia")
p4 = Patient.new("Dia")
p5 = Patient.new("Mia")

a1 = Appointment.new("02/13/2020", d1, p2)
a2 = Appointment.new("02/13/2020", d2, p1)
a3 = Appointment.new("02/13/2020", d3, p4)
a4 = Appointment.new("02/13/2020", d1, p5)
a5 = Appointment.new("02/13/2020", d3, p3)
a6 = Appointment.new("02/13/2020", d2, p2)
a7 = Appointment.new("02/13/2020", d1, p3)
a8 = Appointment.new("02/15/2020", d1, p2)
a9 = Appointment.new("02/16/2020", d1, p2)


binding.pry
0