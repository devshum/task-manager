import Board from './components/Board/Board'
import { useState } from 'react'

const data = {
  currentTasks: [
   
  ],

  completedTasks: []
}

const App = () => {
  const [currentTasks, setCurrentTasks] = useState(data.currentTasks)

  const addTaskHandler = savedTaskData => {
    const newTask = {...savedTaskData}

    setCurrentTasks(prevState => {
      return [
        newTask,
        ...prevState
      ]
    })
  }

  return <Board curTasks={currentTasks} onAddTask={addTaskHandler} />
}

export default App
