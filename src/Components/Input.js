import React, { useState } from 'react';
import './Input.css';

const Input = ({ colors, addColor }) => {
  const [enteredInput, setEnteredInput] = useState('#');
  //  prettier-ignore
  const validInputs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  const onInputHandler = e => {
    const input = e.target.value;
    // Starts with #
    if (!input.startsWith('#')) return alert('Input has to start with "#"');

    console.log(input.slice(1));
    setEnteredInput(input);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    if (enteredInput.length < 4) {
      setEnteredInput('#');
      return alert('Input must contain at least 3 characters');
    }
    if (enteredInput.length === 6) {
      setEnteredInput('#');
      return alert('Wrong input');
    }
    const hexColors = [...colors].map(color => color.color);
    const found = hexColors.includes(enteredInput);
    if (found) return alert('That color already exist');
    else {
      addColor(enteredInput);
      setEnteredInput('#');
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label>Submit your color 😊</label>
      <input
        maxLength="7"
        type="text"
        value={enteredInput}
        placeholder="#777777"
        onChange={onInputHandler}
      />
    </form>
  );
};

export default Input;
