class InstructorsController < ApplicationController

  before_action :current_instructor, only: [:show, :edit, :update, :destroy]

  def show
  end

  def new
    @instructor = Instructor.new
  end

  def create
    # byebug
    instructor = Instructor.new(instructors_params)

    if instructor.valid?
        instructor.save
        redirect_to instructor
    else
      redirect_to new_instructor_path
      # redirect_to "/instructors/new"
    end

  end

  def edit
  
  end

  def update
    # .update_attributes + .save = .update

    if @instructor.update(instructors_params)
        redirect_to @instructor
    else
      # redirect_to "/instructors/#{@instructor.id}/edit"
      redirect_to edit_instructor_path(@instructor)

    end

  end

  def destroy
    @instructor.destroy
    render :home
  end


  def current_instructor
    @instructor = Instructor.find(params[:id])
  end

  def instructors_params
    params.require(:instructor).permit(:name)
  end
end

