import React from 'react';

const Input: React.FC<React.RefObject<HTMLInputElement>> = (ref) => {
  console.log('Input');
  return (
    <input ref={ref} />
  );
};

export default Input;
