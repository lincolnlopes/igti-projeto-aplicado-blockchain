import React from 'react';
import Form from '../Form/Index';

const HowMany = () => {
  const [textTitle, setTextTitle] = React.useState('');

  return (
    <>
      {textTitle && <h1>{textTitle}</h1>}
      <Form setTextTitle={setTextTitle} />
    </>
  );
};
export default HowMany;
