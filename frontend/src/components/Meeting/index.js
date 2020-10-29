import React from 'react';
import { useLocation, useParams } from 'react-router';

const Meeting = () => {
  const params = useParams();
  const location = useLocation();
  console.log(params);
  return (
    <>
      <h1>{params.id}</h1>
    </>
  );
};

export default Meeting;
