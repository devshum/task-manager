import styles from './Board.module.css';
import BoardHead from './BoardHead/BoardHead';

const Board = props => {
  return (
    <section className={styles.board}>
      <BoardHead />
      <h2>Tasks on hold</h2>
      { props.data.map(task => {
        return <div>
                  <p>{ task.title }</p>
                  <p>{ task.date.getFullYear() }</p>
                  <p>{ task.date.getMonth() }</p>
                  <p>{ task.date.getDay() }</p>
                  <p>{ task.status }</p>
                  <p>{ task.importance }</p>
               </div>
      }) }
      {/* <h2>Tasks completed</h2> */}
    </section>
  )
}

export default Board;