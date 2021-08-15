import styles from './Board.module.css';
import BoardHead from './BoardHead/BoardHead';
import Tasks from '../Tasks/Tasks';
import FormInputs from '../FormInputs/FormInputs';

const Board = props => {
  return (
    <section className={styles.board}>
      <BoardHead curTasks={props.curTasks} />
      <FormInputs />
      <Tasks curTasks={props.curTasks} />
    </section>
  )
}

export default Board;