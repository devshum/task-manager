import styles from './Board.module.css';
import BoardHead from './BoardHead/BoardHead';
import Tasks from '../Tasks/Tasks';

const Board = props => {
  return (
    <section className={styles.board}>
      <BoardHead curTasks={props.curTasks} />
      <Tasks curTasks={props.curTasks} />
    </section>
  )
}

export default Board;