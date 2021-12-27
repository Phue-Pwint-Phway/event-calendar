require 'byebug'
class SchedulesController < ApplicationController
  before_action :set_schedule, only: [:show]

  # GET /schedules
  def index
    @schedules = Schedule.all

    render json: @schedules
  end

  # GET /schedules/1
  def show
    render json: @schedule
  end

  # POST /schedules
  def create
    @schedule = Schedule.new(schedule_params)

    if @schedule.save
      render json: @schedule, status: :created, location: @schedule
    else
      render json: @schedule.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /schedules/1
  def update
    byebug
    @schedule = Schedule.find_by(id: params[:schedule][:id])
    # schedule = @schedule.update(schedule_params)
    if @schedule.update(schedule_params)
      render json: @schedule
    else
      render json: @schedule.errors, status: :unprocessable_entity
    end
  end

  # DELETE /schedules/1
  def destroy
    @schedule = Schedule.find_by(id: params[:id])
    @schedule.destroy
  end

    # Use callbacks to share common setup or constraints between actions.
    def set_schedule
      @schedule = Schedule.find(params[:id])
    end

    private 
    # Only allow a list of trusted parameters through.
    def schedule_params
      params[:schedule][:start] = params[:schedule][:start].require(:_date)
      params[:schedule][:end] = params[:schedule][:end].require(:_date)
      params.require(:schedule).permit(:calendarId, :title, :body, :goingDuration, :comingDuration, :isAllDay, :category, :dueDateClass, :location, :recurrenceRule, :isPending, :isFocused, :isVisible, :isReadOnly, :isPrivate, :color, :bgColor, :dragBgColor, :borderColor, :customStyle, :state, :start, :end)
    end
end
