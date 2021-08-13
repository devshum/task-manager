import styles from './Task.module.css';

const Task = props => {
  return (
    <div className={styles.task}>
      <p className={styles['task__title']}>{ props.title }</p>

      <div className={styles['task__date']}>
        <p>{ props.date.getDay() }</p>
        <p>{ props.date.toLocaleString('en-us', { month: 'long' }) }</p>
        <p>{ props.date.getFullYear() }</p>
      </div>
      
      <p>{ props.status }</p>
      <p>{ props.importance }</p>

      <button>...</button>
    </div>
  )
}

export default Task;