import { useState } from "react";

const AddTask = ({addTask}) => {

    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);

    console.log({text});

    const onTextChange =(e)=> {
        setText(e.target.value);
    }

    const onDayChange = (e) => {
        setDay(e.target.value);
    }

    const onCheckReminder = (e) => {
        setReminder(e.currentTarget.checked);
    }

    const submitForm = (e) => {
        e.preventDefault();
        let formData = {text, day, reminder};
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
            <input type="text" placeholder="Add Date & Time" value={day} onChange={onDayChange} />
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
