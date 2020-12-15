import React from 'react';
import styles from './TextArea.module.css';

const TextArea = ({ id, label, type, error, ...props }) => {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        type={type}
        {...props}
        className={type === 'submit' ? styles.button : styles.input}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default TextArea;
