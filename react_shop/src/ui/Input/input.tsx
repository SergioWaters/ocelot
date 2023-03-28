import { FC } from 'react';
import styles from './style.module.scss'

interface inputProps {
  placeholder?: string
  iconUrl?: string
  className?: string
  type?: string
}

export const Input: FC<inputProps> = (props) => {
  


  return (
    <label className={styles.inputBox}>
      <button className={styles.inputBtn}>
        {
          props.iconUrl ?
          <img src={props.iconUrl} alt='button icon'/>
          : ''
        }
      </button>
      <input 
        type={props.type || 'text'}
        placeholder={props.placeholder} 
        className={styles.input}/>
    </label>
  );
}
