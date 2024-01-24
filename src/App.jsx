import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Tasks from './components/Tasks';



function App() {
  const [tasks, setTasks] = useState([
    {id: 1, text: "Doctors Appointment", day: "Jan 20 2024 6:00pm", reminder: true},
    {id: 2, text: "Meeting with Client", day: "Jan 21 2024 2:30pm", reminder: true},
    {id: 3, text: "Grocery Shopping", day: "Jan 22 2024 5:00pm", reminder: false},
    {id: 4, text: "Drop Kids to School", day: "Jan 22 2024 11:00am", reminder: true}
])

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} />
    </div>
  )
}

export default App
