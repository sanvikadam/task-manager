import { useState } from "react";
import moment from "moment";

const AddTask = ({addTask}) => {

    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [actualDate, setActualDate]= useState("");
    const [reminder, setReminder] = useState(false);
    const date = new Date();

    const onTextChange =(e)=> {
        setText(e.target.value);
    }

    const onDayChange = (e) => {
        var getDate = e.target.value;
        var dateObject = new Date(getDate);
        console.log((moment(dateObject).format("ll")));
        var setDate = moment(dateObject).format("ll") + " " +moment(date).format("LT");
        console.log(getDate);
        setActualDate(getDate);
        setDay(setDate);
        // dateStr = setDate;
    }

    const onCheckReminder = (e) => {
        setReminder(e.currentTarget.checked);
    }

    const submitForm = (e) => {
        e.preventDefault();
        let formData = {text, actualDate, day, reminder};
        console.log(formData);
        addTask(formData);
        setText("");
        setDay("");
        setReminder(false);
    }



  return (
    <form className="add-form" onSubmit={submitForm}>
        <div className="form-control">
            <label>Task</label>
            <input type="text" placeholder="Add Tasks" value={text} onChange={onTextChange} />
        </div>
        <div className="form-control">
            <label>Day & Time</label>
            <input type="date" placeholder="Add Date & Time" value={actualDate} min={date.toISOString().split('T')[0]} onChange={onDayChange} />
        </div>
        <div className="form-control-check">
            <label>Checkbox</label>
            <input type="checkbox" checked={reminder} value={reminder} onChange={onCheckReminder}/>
        </div>
        <input type="submit" value="Save Tasks" className="btn btn-block"/>
    </form>
  )
}

export default AddTask
