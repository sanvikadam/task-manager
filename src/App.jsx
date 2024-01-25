import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


function App() {
  const [tasks, setTasks] = useState([
    {id: 1, text: "Doctors Appointment", day: "Jan 20 2024 6:00pm", reminder: true},
    {id: 2, text: "Meeting with Client", day: "Jan 21 2024 2:30pm", reminder: true},
    {id: 3, text: "Grocery Shopping", day: "Jan 22 2024 5:00pm", reminder: false},
    {id: 4, text: "Drop Kids to School", day: "Jan 22 2024 11:00am", reminder: true},
    {id: 5, text: "Drop Kids to School", day: "Jan 22 2024 11:00am", reminder: true}
])

const name = "sanvi";

console.log(...name);

const addTask = (task) => {
  console.log(task);
  const id = Math.floor((Math.random() * 100) + 1);
  const newTask = {id, ...task};
  console.log(newTask);
  setTasks([...tasks, newTask]);
  console.log(tasks);
}

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
}

const toggleReminder = (id) => {
  setTasks(
    tasks.map((task)=> task.id == id ? {...task, reminder: !task.reminder} : task)
  )
}

  return (
    <div className='container'>
      <Header />
      <AddTask addTask={addTask} />
      {(tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} toggleReminder={toggleReminder}/> : "No Record"
    )}
    </div>
  )
}

export default App
