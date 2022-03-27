import React from 'react';
import './Button.css';

const Button = ({ children, colors, onListColors, selectedColor }) => {
  const addColorHandler = async function () {
    const url = `https://www.colr.org/json/color/random?query&timestamp=${new Date().getTime()}`;
    const res = await fetch(url);
    const { colors } = await res.json();
    if (colors[0].hex === '')
      return alert('We could not get your color! ☹\n Please try again. 😊');
    if (colors.includes(`#${colors[0].hex}`))
      return alert('You already have that color. 😊');
    if (colors.length > 1) {
      console.log(colors.length);
    }
    onListColors({
      color: `#${colors[0].hex}`,
      id: colors[0].id,
      selected: true,
    });
  };

  return (
    <div className="center">
      <button
        className="btn"
        onClick={addColorHandler}
        style={{ color: selectedColor.color || '#333' }}
      >
        {children}
      </button>
      ;
    </div>
  );
};

export default Button;
