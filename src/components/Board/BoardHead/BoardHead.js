import styles from "./BoardHead.module.css";
import Button from '../../Button/Button';

const BoardHead = () => {
  return (
    <div className={styles['board-head']}>
      <p className={styles['board-head__title']}>You’ve got <span className={styles['board-head__amount']}>7 task</span></p>
      <Button>Add New</Button>
    </div>
  )
}

export default BoardHead;