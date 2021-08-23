import styles from './Tasks.module.css'
import Task from './Task/Task'

const Tasks = props => {
  // TO DO finish the filter
  const enteredYear = Number(props.enteredYear);
  
  return (
    <div>
      <h2 className={styles['tasks__hold-label']}>Current Tasks</h2>
      <div className={styles['tasks__wrapper']}>
        { props.curTasks.map((task, i) => {
          return <Task key={i}
                       title={task.enteredTitle}
                       date={task.enteredDate}
                       status={task.enteredStatus}
                       importance={task.enteredImportance} />
        }) }
        {/* <h2>Tasks completed</h2> */}

      </div>
    </div>
  )
}

export default Tasks