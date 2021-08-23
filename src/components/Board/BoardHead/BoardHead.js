import styles from "./BoardHead.module.css"
import Button from '../../Button/Button'

const BoardHead = props => {
  let allUniqueYears = []

  const curTasksAmount = props.curTasks.length
  const suffix = props.curTasks.length > 1 ? 'tasks' : 'task'
  
  const changeFilterHandler = e => {
    props.onSaveFilterData(e.target.value)
  }

  const getAllYearsAmount = () => {
    const allYears = props.curTasks.map(task => task.date.getFullYear())

    allUniqueYears = [...new Set(allYears)]
  }

  getAllYearsAmount()

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
            {allUniqueYears.map((year, i) => <option key={i} value={year}>{year}</option>)}
          </select>
        </div>
      </div>
      <Button>Add New</Button>
    </div>
  )
}

export default BoardHead