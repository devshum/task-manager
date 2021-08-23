import styles from './Board.module.css'
import BoardHead from './BoardHead/BoardHead'
import Tasks from '../Tasks/Tasks'
import FormInputs from '../FormInputs/FormInputs'
import { useState } from 'react'

const Board = props => {
  const [enteredYear, setEnteredYear] = useState('')

  const saveTaskDataHandler = enteredTaskData => {
    props.onAddTask({...enteredTaskData})
  }

  const saveFilterDataHandler = enteredYear => {
    setEnteredYear(enteredYear)
  }

  return (
    <section className={styles.board}>
      <BoardHead onSaveFilterData={saveFilterDataHandler} 
                 curTasks={props.curTasks}
                 enteredYear={enteredYear} />
      <FormInputs onSaveTaskData={saveTaskDataHandler} />
      <Tasks curTasks={props.curTasks} 
             enteredYear={enteredYear} />
    </section>
  )
}

export default Board