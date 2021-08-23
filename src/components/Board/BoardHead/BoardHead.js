import styles from "./BoardHead.module.css"
import Button from '../../Button/Button'

const BoardHead = props => {
  const curTasksAmount = props.curTasks.length
  const suffix = props.curTasks.length > 1 ? 'tasks' : 'task'

  const changeFilterHandler = e => {
    props.onSaveFilterData(e.target.value)
  }

  return (
    <div className={styles['board-head']}>
      <div className={styles['board-head__title-wrap']}> 
        <h1 className={styles['board-head__title']}>
          You’ve got 
          <span className={styles['board-head__amount']}>{curTasksAmount} {suffix}</span>
        </h1>
        <div className={styles['board-head__filter-wrap']}>
          <p>Filter by a year:</p>
          <select value={props.enteredYear} onChange={changeFilterHandler}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
      </div>
      <Button>Add New</Button>
    </div>
  )
}

export default BoardHead