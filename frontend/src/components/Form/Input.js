import React from 'react';

const Input = ({ id, label, type, ...props }) => {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} type={type} {...props} />
    </>
  );
};

export default Input;
