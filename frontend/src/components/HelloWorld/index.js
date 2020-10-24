import React, { useEffect, useState } from 'react';

export default function HelloWorld() {
  const [hasError, setErrors] = useState(false);
  const [stateQty, setQty] = useState({});

  useEffect(() => {
    async function fetchData() {
      await fetch('http://localhost:3001/network/qty', {
        method: 'get',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'applicatin/json',
        },
      })
        .then((res) => res.json())
        .then((res) => setQty(res))
        .catch((error) => setErrors(error));
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Hello Wolrd!!!{stateQty.qty}</h1>
      <span>{hasError}</span>
    </>
  );
}
