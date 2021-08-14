import styles from './Tasks.module.css';
import Task from './Task/Task';

const Tasks = props => {
  return (
    <div>
      <h2 className={styles['tasks__hold-label']}>Current Tasks</h2>
      <div className={styles['tasks__wrapper']}>
        { props.curTasks.map(task => {
          return <Task title={task.title}
                      date={task.date}
                      status={task.status}
                      importance={task.importance} />
        }) }
        {/* <h2>Tasks completed</h2> */}

      </div>
    </div>
  )
}

export default Tasks;