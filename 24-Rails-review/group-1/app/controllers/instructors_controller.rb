class InstructorsController < ApplicationController

    before_action :current_instructor, only: [:show, :edit, :update, :destroy]

    def show
        
    end

    def new
        @instructor = Instructor.new
    end

    def create
        # byebug
        instructor = Instructor.new(instructor_params)

        if instructor.valid?
            instructor.save
            redirect_to instructor
        else
            redirect_to "/instructors/new"
        end
    end

    def edit
    
    end

    def update
        # byebug
        # .update_attributes + .save => .update
        # @instructor.update_attributes(instructor_params)

        if @instructor.update(instructor_params)
            redirect_to @instructor
            # redirect_to instructor_path(@instructor)
        else
            # redirect_to edit_instructor_path(@instructor)
            redirect_to "/instructors/#{@instructor.id}/edit"
        end
    end

    def destroy
        @instructor.destroy
        render :home
    end

    def current_instructor
        @instructor = Instructor.find(params[:id])
    end

    private
    def instructor_params
        params.require(:instructor).permit(:name)
    end
end
