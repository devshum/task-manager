import styles from './Board.module.css'
import BoardHead from './BoardHead/BoardHead'
import Tasks from '../Tasks/Tasks'
import FormInputs from '../FormInputs/FormInputs'

const Board = props => {
  const saveTaskDataHandler = enteredTaskData => {
    props.onAddTask({...enteredTaskData})
  }

  return (
    <section className={styles.board}>
      <BoardHead curTasks={props.curTasks} />
      <FormInputs onSaveTaskData={saveTaskDataHandler} />
      <Tasks curTasks={props.curTasks} />
    </section>
  )
}

export default Board