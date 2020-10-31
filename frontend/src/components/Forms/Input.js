import React from 'react';
import styles from './Input.module.css';

const Input = ({ id, label, type, error, ...props }) => {
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
        className={type === 'submit' ? styles.button : styles.input}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
