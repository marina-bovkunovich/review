/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';

const Button: React.FC = () => {
  console.log('Button');

  const clickHandler = () => {
    // if (inputRef.current != null && inputRef.current.value != null) {
    //   dispatch(getCards(inputRef.current.value));
    // }
  };

  return (
    <div
      style={{
        padding: '10px', border: 'solid black 1px', width: '80px', textAlign: 'center',
      }}
      onClick={clickHandler}
    >
      Click
    </div>
  );
};

export default Button;
