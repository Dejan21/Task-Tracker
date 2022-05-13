//import React from "react";  need for class compononet but not for Func
import { useState } from "react"
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState(
    [
        {
            id:1, 
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
           id:2, 
           text: 'Meeting at School',
           day: 'Feb 6th at 1:30pm',
           reminder: true,
        },
        {
           id:3, 
           text: 'Food Shopping',
           day: 'Feb 5th at 2:30pm',
           reminder: false,
        }
    ]
)

// Delete Task
const deleteTask = (id) => {
 setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
 setTasks(tasks.map((task) => 
   task.id === id ? {...task, reminder: !task.reminder} : task
 ))
}

  return (
    <div className="container">
      <Header title='Task Tracker' />
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to show'}
    </div>
  )
}

// class comp
// class App extends React.Component {
//   render(){
//     return <h1>Hell ofrom a class </h1>
//   }
// }

export default App;
