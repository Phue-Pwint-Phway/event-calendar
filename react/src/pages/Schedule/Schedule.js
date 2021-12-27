import "tui-calendar/dist/tui-calendar.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

import "./calendar.css";

import TUICalendar from "@toast-ui/react-calendar"
import axios from "../../axios";
import React from "react";
// import { propTypes } from "react-bootstrap/esm/Image";

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.BASE_API_ROUTE = "/schedule";

    this.useRef = React.createRef(null);
    this.state = {
      error: [],
      schedules: [],
      calendars: [],
    };
    this.fetchSchedule = this.fetchSchedule.bind(this);
    this.createSchedule = this.createSchedule.bind(this);
    this.updateScheduleTask = this.updateScheduleTask.bind(this);
    this.deleteSchedule = this.deleteSchedule.bind(this);
  }

  createSchedule(scheduleData) {
    const schedule = {
      id: String(Math.random()),
      calendarId: scheduleData.calendarId,
      title: scheduleData.title,
      isAllDay: scheduleData.isAllDay,
      start: scheduleData.start,
      end: scheduleData.end,
      category: scheduleData.isAllDay ? "allday" : "time",
      dueDateClass: "",
      location: scheduleData.location,
      state: scheduleData.state
    };

    this.useRef.current.calendarInst.createSchedules([schedule]);

    this.CREATE_API_ROUTE = "/schedule/create";
    axios.post(this.CREATE_API_ROUTE, schedule)
      .then(
        () => this.props.history.push("/schedule")

      )
      .catch(error => {
        if (error.response) {
          console.error(error.response.data);
          if (error.response.data.errors) {
            this.setState({
              errors: error.response.data.errors
            });
          }
        }
      });
  }

  updateScheduleTask(ScheduleData) {
    const { changes } = ScheduleData;
    const updatedSchedule = ScheduleData.schedule;
    this.useRef.current.calendarInst.updateSchedule(
      updatedSchedule.id,
      updatedSchedule.calendarId,
      changes
    );


    this.UPDATE_API_ROUTE = "/schedule/update";
    axios.post(this.UPDATE_API_ROUTE, { schedule: updatedSchedule })
      .then(
        () => this.props.history.push("/schedule")
      )
      .catch(error => {
        if (error.response) {
          console.error(error.response.data);
          if (error.response.data.errors) {
            this.setState({
              errors: error.response.data.errors
            });
          }
        }
      });
  }

  deleteSchedule(ScheduleData) {
    const { id, calendarId } = ScheduleData.schedule;
    this.useRef.current.calendarInst.deleteSchedule(id, calendarId);
    this.DELETE_API_ROUTE = "/schedule/destroy";
    axios.post(this.DELETE_API_ROUTE, { id: id })
      .then(
        () => this.props.history.push("/schedule")
      )
      .catch(error => {
        if (error.response) {
          console.error(error.response.data);
          if (error.response.data.errors) {
            this.setState({
              errors: error.response.data.errors
            });
          }
        }
      });
  }

  fetchSchedule(url = this.BASE_API_ROUTE) {
    axios.get(url).then(res => {
      this.setState(
        {
          schedules: res.data,
        }
      )
    })
      .catch(error => {
        if (error.response) {
          console.error(error.response.data);
          if (error.response.data.errors) {
            this.setState({
              errors: error.response.data.errors
            });
          }
        }
      });
  }

  componentDidMount() {
    // this._isMounted = true;
    // console.log("mounted")
    this.fetchSchedule();
  }

  render() {
    const schedules = this.state.schedules;

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

    return (
      <div>
        <TUICalendar
          ref={this.useRef}
          height="1000px"
          view="week"
          taskView={true}
          calendars={calendars}
          schedules={schedules}
          useCreationPopup={true}
          useDetailPopup={true}
          onBeforeCreateSchedule={this.createSchedule}
          onBeforeUpdateSchedule={this.updateScheduleTask}
          onBeforeDeleteSchedule={this.deleteSchedule}
        />
      </div>
    )
  }

}