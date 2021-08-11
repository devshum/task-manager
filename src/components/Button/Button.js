import styles from './Button.module.css';
import { ReactComponent as ButtonIcon } from '../../assets/icon-btn.svg';

const Button = props => {
  return <button className={styles.button}>
            <div className={styles['button__wrapper']}>
              <i className={styles['button__icon']}><ButtonIcon /></i>
              <span>{props.children}</span>
            </div>
         </button>
}

export default Button;