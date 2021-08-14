import styles from './Task.module.css';

const Task = props => {
  return (
    <div className={styles.task}>
      <button className={styles.task__title}>{ props.title }</button>

      <button className={styles.task__date}>
        <p className={styles['task__date-label']}>Planned for:</p>
        <p>{ props.date.getDay() }</p>
        <p>{ props.date.toLocaleString('en-us', { month: 'long' }) }</p>
        <p>{ props.date.getFullYear() }</p>
      </button>
      
      <button className={`${styles.task__status} ${styles['task__status--pending']}`}>
        { props.status }
      </button>

      <button className={`${styles.task__importance} ${styles['task__importance--minor']}`}>
        { props.importance }
      </button>

      <button className={styles.task__btn}></button>
    </div>
  )
}

export default Task;