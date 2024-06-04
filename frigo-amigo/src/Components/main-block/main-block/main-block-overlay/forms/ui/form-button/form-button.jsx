import React from 'react';
import styles from './form-button.module.css';

export const FormButton = ({ text, onSubmit }) => {
  const handleClick = () => {
    onSubmit();
  };
  return (
    <>
      <button className={styles.button} onClick={handleClick}>
        {text}
      </button>
    </>
  );
};
