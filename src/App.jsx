import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


function App() {
  const [showAddTask, setshowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks()
  },[]);

  // Fetch Tasks

  const fetchTasks = async() => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    
    return data;
    console.log(data);
  }

const addTask = async (task) => {
  const res = await fetch("http://localhost:5000/tasks", {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  })

  const data = await res.json();
  console.log(data);
  setTasks([...tasks, data]);


  // console.log(task);
  // const id = Math.floor((Math.random() * 100) + 1);
  // const newTask = {id, ...task};
  // console.log(newTask);
  // setTasks([...tasks, newTask]);
  // console.log(tasks);
}

const deleteTask = async (id) => {

  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE'
  })
  setTasks(tasks.filter((task) => task.id !== id));
}

const toggleReminder = (id) => {
  setTasks(
    tasks.map((task)=> task.id == id ? {...task, reminder: !task.reminder} : task)
  )
}

  return (
    <div className='container'>
      <Header addTask={()=> setshowAddTask(!showAddTask)} textChange={showAddTask}/>
      {showAddTask && <AddTask addTask={addTask} />}
      {(tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} toggleReminder={toggleReminder}/> : "No Record"
    )}
    </div>
  )
}

export default App
