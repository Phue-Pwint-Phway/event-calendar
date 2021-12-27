# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_12_07_082350) do

  create_table "posts", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "title", null: false
    t.text "description", size: :long, null: false
    t.integer "status", limit: 1, null: false
    t.bigint "create_user_id", null: false
    t.bigint "updated_user_id", null: false
    t.integer "deleted_user_id"
    t.datetime "deleted_at", precision: 6
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["create_user_id"], name: "fk_rails_7254f98eaf"
    t.index ["updated_user_id"], name: "fk_rails_bf7d327639"
  end

  create_table "schedules", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "calendarId"
    t.string "title"
    t.string "body"
    t.datetime "start"
    t.datetime "end"
    t.integer "goingDuration"
    t.integer "comingDuration"
    t.boolean "isAllDay"
    t.string "category"
    t.string "dueDateClass"
    t.string "location"
    t.string "recurrenceRule"
    t.boolean "isPending"
    t.boolean "isFocused"
    t.boolean "isVisible"
    t.boolean "isReadOnly"
    t.boolean "isPrivate"
    t.string "color"
    t.string "bgColor"
    t.string "dragBgColor"
    t.string "borderColor"
    t.string "customStyle"
    t.string "state"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "password_digest"
    t.string "profile", null: false
    t.integer "role", limit: 1, null: false
    t.string "phone"
    t.string "address"
    t.date "dob"
    t.integer "create_user_id", null: false
    t.integer "updated_user_id", null: false
    t.integer "deleted_user_id"
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "posts", "users", column: "create_user_id"
  add_foreign_key "posts", "users", column: "updated_user_id"
end
