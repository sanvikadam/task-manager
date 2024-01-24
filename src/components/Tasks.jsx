const Tasks = ({tasks}) => {
  return (
    <>
      {tasks.map((task)=> (<h3 className="task" key={task.id}>{task.text}</h3>))}
    </>
  )
}

export default Tasks
