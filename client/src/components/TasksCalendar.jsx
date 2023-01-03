import { DatePicker, TimePicker } from "@material-ui/pickers";
import { useState } from "react";
import "./css/TasksCalendar.css";

const TasksCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="Calendar_clock">
      <div className="Calentar_Column">
        <label>Date</label>
        <DatePicker className="materialui" value={date} onChange={setDate} />
      </div>
      <div className="Calentar_Column">
        <label>Hour</label>
        <TimePicker className="materialui" value={date} onChange={setDate} />
      </div>
    </div>
  );
};

export default TasksCalendar;
