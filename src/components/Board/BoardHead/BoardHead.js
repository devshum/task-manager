import styles from "./BoardHead.module.css";
import Button from '../../Button/Button';

const BoardHead = props => {
  const curTasksAmount = props.curTasks.length;
  const suffix = props.curTasks.length > 1 ? 'tasks' : 'task';

  return (
    <div className={styles['board-head']}>
      <h1 className={styles['board-head__title']}>
        You’ve got 
        <span className={styles['board-head__amount']}>{curTasksAmount} {suffix}</span>
      </h1>
      <Button>Add New</Button>
    </div>
  )
}

export default BoardHead;