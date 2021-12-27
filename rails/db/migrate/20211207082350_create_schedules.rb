class CreateSchedules < ActiveRecord::Migration[6.1]
  def change
    create_table :schedules do |t|
      t.string :calendarId
      t.string :title      
      t.string :body
      t.datetime :start
      t.datetime :end
      t.integer :goingDuration
      t.integer :comingDuration
      t.boolean :isAllDay
      t.string :category
      t.string :dueDateClass
      t.string :location
      t.string :recurrenceRule
      t.boolean :isPending
      t.boolean :isFocused
      t.boolean :isVisible
      t.boolean :isReadOnly
      t.boolean :isPrivate
      t.string :color
      t.string :bgColor
      t.string :dragBgColor
      t.string :borderColor
      t.string :customStyle
      t.string :state
      t.timestamps
    end
  end
end
