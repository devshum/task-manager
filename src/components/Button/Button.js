import styles from './Button.module.css';
import { ReactComponent as ButtonIcon } from '../../assets/icon-btn.svg';

const Button = props => {
  return <button className={styles.button}>
            <i className={styles['button__icon']}><ButtonIcon /></i>
            <span>{props.children}</span>
         </button>
}

export default Button;