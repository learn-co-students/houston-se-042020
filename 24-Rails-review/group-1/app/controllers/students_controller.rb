class StudentsController < ApplicationController

    before_action :current_student, only: [:show]

    def show
    
    end

    def new
        @student = Student.new
        @instructors = Instructor.all
    end

    def create
        # byebug
        @student = Student.new(student_params)

        if @student.valid?
            @student.save
            redirect_to @student
        else
            redirect_to "/students/new"
        end
    end

    def edit
        @instructors = Instructor.all
      end
    
      def update
          if @student.update(students_params)
            redirect_to @student
          else
            redirect_to edit_student_path
          end
      end
    
      def destroy
        @student.destroy
        render :home
      end

    def current_student
        @student = Student.find(params[:id])
    end

    private
    def student_params
        params.require(:student).permit(:name, :age, :major, :instructor_id)
    end
end
