import styles from './Tasks.module.css';
import Task from './Task/Task';

const Tasks = props => {
  return (
    <div>
      <h2>Tasks on hold</h2>
      { props.curTasks.map(task => {
        return <Task title={task.title}
                     date={task.date}
                     status={task.status}
                     importance={task.importance} />
      }) }
      {/* <h2>Tasks completed</h2> */}

    </div>
  )
}

export default Tasks;