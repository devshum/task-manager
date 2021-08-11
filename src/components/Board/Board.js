import styles from './Board.module.css';
import BoardHead from './BoardHead/BoardHead';

const Board = () => {
  return (
    <div className={styles.board}>
      <BoardHead />
      <div>Tasks on hold</div>
      <div>Tasks completed</div>
    </div>
  )
}

export default Board;