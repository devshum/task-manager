import styles from './Tasks.module.css'
import Task from './Task/Task'

const Tasks = props => {
  const enteredYear = Number(props.enteredYear);
  
  return (
    <div>
      <h2 className={styles['tasks__hold-label']}>Current Tasks</h2>
      <div className={styles['tasks__wrapper']}>
        { props.curTasks.filter(task => task.date.getFullYear() === enteredYear).map((task, i) => {
          return <Task key={i}
                       title={task.title}
                       date={task.date}
                       status={task.status}
                       importance={task.importance} />
        }) }
        {/* <h2>Tasks completed</h2> */}

      </div>
    </div>
  )
}

export default Tasks