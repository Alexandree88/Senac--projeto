import React from 'react';

interface ButtonComponentProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

function ButtonComponent({ text, type = 'button', onClick }: ButtonComponentProps) {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
}

export default ButtonComponent;