import React from 'react';

const InputState = ({ id, label, type, ...props }) => {
  const [value, setValue] = React.useState('');
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        {...props}
        onChange={(event) => setValue(event.target.value)}
      />
      {value && <h1>{value}</h1>}
    </>
  );
};

export default InputState;
