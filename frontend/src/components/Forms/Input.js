import React from 'react';
import styles from './Input.module.css';

const Input = ({ id, label, type, ...props }) => {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        {...props}
        className={type === 'button' ? styles.button : styles.input}
      />
      <p className={styles.error}>Error</p>
    </div>
  );
};

export default Input;
