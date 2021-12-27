import React, { useCallback, useRef } from "react";
// import { render } from "react-dom";

import TUICalendar from "@toast-ui/react-calendar";
// import { ISchedule, ICalendarInfo } from "tui-calendar";

import "tui-calendar/dist/tui-calendar.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

import "./calendar.css";

const start = new Date();
const end = new Date(new Date().setMinutes(start.getMinutes() + 30 ));
const schedules = [
  {
    id: "1",
    calendarId: "2",
    isvisible: true,
    category: "time",
    title: "Meeting",
    body: "Description",
    start,
    end,

  },
  {
    id: "2",
    calendarId: "1",
    category: "time",
    title: "Study",
    body: "Description",
    start: new Date(new Date().setHours(start.getHours() + 1)),
    end: new Date(new Date().setHours(start.getHours() + 3)),

  },
  {
    id: "3",
    calendarId: "3",
    category: "time",
    title: "Working",
    body: "description",
    start: new Date(new Date().setHours(start.getHours() + 5)),
    end: new Date(new Date().setHours(start.getHours() + 9)),

  },
]

const calendars = [
  {
    id: "1",
    name: "My Calendar",
    color: "#ffffff",
    bgColor: "#9e5fff",
    dragBgColor: "#9e5fff",
    borderColor: "#9e5fff"
  },
  {
    id: "2",
    name: "Company",
    color: "#ffffff",
    bgColor: "#F4696A",
    dragBgColor: "#F4696A",
    borderColor: "#F4696A"
  },
  {
    id: "3",
    name: "Office",
    color: "#ffffff",
    bgColor: "#00a9ff",
    dragBgColor: "#00a9ff",
    borderColor: "#00a9ff"
  },
]

export default function TuiCalendar() {

  const cal = useRef(null);

  const onClickSchedule = useCallback((e) => {

    console.log("Click task schedule")

    const {id, calendarId} = e.schedule;
    const el = cal.current.calendarInst.getElement(id, calendarId);

    console.log("onClickTaskSchedule : " + e, el.getBoundingClientRect());
  }, []);

  const onBeforeCreateSchedule = useCallback((taskScheduleData) => {
    console.log("aaa")
    console.log("Create task schedule : " + JSON.stringify(taskScheduleData.calendarId));

    const schedule = {
      id: String(Math.random()),
      calendarId: taskScheduleData.calendarId,
      isAllDay: taskScheduleData.isAllDay,
      category: taskScheduleData.isAllDay ? "all Day" : "time",
      title: taskScheduleData.title,
      start: taskScheduleData.start,
      end: taskScheduleData.end,
      location: taskScheduleData.location,
      state: taskScheduleData.state,
      dueDateClass: "",
    };
    
    // save task schedule
    cal.current.calendarInst.createSchedules([schedule]);
  }, []);

  const onBeforeDeleteSchedule = useCallback((res) => {
    console.log("Delete task schedule")
    console.log(res)

    const {id, calendarId} = res.schedule;

    // delete task schedule
    cal.current.calendarInst.deleteSchedule(id, calendarId);
  }, []);

  const onBeforeUpdateSchedule = useCallback((e) => {
    console.log("Update task schedule")
    console.log(e)

    const { schedule, changes } = e;

    cal.current.calendarInst.updateSchedule(
      schedule.id,
      schedule.calendarId, 
      changes,
    );
  }, []);

  function _getFormattedTime(time) {
    const date = new Date(time);
    const h = date.getHours();
    const m = date.getMinutes();

    return `${h}:${m}`;
  }

  function _getTimeTemplate(schedule, isAllDay) {
    var html = [];

    if(!isAllDay) {
      html.push("<strong>" + _getFormattedTime(schedule.start) + "</strong>");
    }

    if(schedule.isPrivate) {
      html.push('<span class="calendar-font-icon ic-lock-b"></span>');
      html.push("Private");
    }
    else {
      if(schedule.isReadOnly) {
        html.push('<span class="calendar-font-icon ic-readonly-b"></span>');
      }
      else if(schedule.recurrenceRule) {
        html.push('<span class="calendar-font-icon ic-repeat-b></span>');
      }
      else if(schedule.attendees.slength) {
        html.push('<span class="calendar-font-icon ic-user-b"></span>')
      }
      else if(schedule.location) {
        html.push('<span class="calendar-font-icon ic-location-b"></span>')
      }
      html.push(" " + schedule.title);
    }
    return html.join("");
  }

  const templates = {
    time: function (schedule) {
      console.log("SCHEDULE")
      console.log(schedule)

      return _getTimeTemplate(schedule, false);
    }
  };
  
  return (
    <div className="App">
      <h1>Welcome to TOAST Ui Calendar</h1>
      <TUICalendar
        // ref = {cal}
        // height = "1000px"
        // view = "week"
        // taskView={true}
        // template = {templates}
        calendars = {calendars}
        schedules = {schedules}
        // useCreationPopup = {true}
        useDetailPopup = {true}
        // onClickSchedule = {onClickSchedule}
        // onBeforeCreateSchedule = {onBeforeCreateSchedule}
        // onBeforeDeleteSchedule = {onBeforeDeleteSchedule}
        // onBeforeUpdateSchedule = {onBeforeUpdateSchedule}
      />
    </div>
  )
}



