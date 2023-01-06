import { DatePicker, TimePicker } from "@material-ui/pickers";
import { useLocalStorage } from "usehooks-ts";
import { useState } from "react";
import "./css/TasksCalendar.css";

const TasksCalendar = () => {
  const [Active] = useLocalStorage("darkTheme", true);
  const [date, setDate] = useState(new Date());

  return (
    <div className={Active ? "Calendar_clock" : "Calendar_clockDart"}>
      <div className="Calentar_Column">
        <label>Date</label>
        <DatePicker
          className="materialui"
          value={date}
          onChange={setDate}
        />
      </div>
      <div className="Calentar_Column">
        <label>Hour</label>
        <TimePicker
          className="materialui"
          value={date}
          onChange={setDate}
        />
      </div>
    </div>
  );
};

export default TasksCalendar;
