import React from 'react';

const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title;
    console.log(props);
  }, [props]);
  return (
    <>
      <h1>teste</h1>
    </>
  );
};

export default Head;
