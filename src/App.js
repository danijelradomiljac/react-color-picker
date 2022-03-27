import React, { useState } from 'react';
import './App.css';
import Button from './Components/Button.js';
import List from './Components/List';

function App() {
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');

  const addColor = color => {
    const newColor = {
      color: color,
      id: Math.random().toString(),
      selected: true,
    };
    const newItems = [...colors].map(
      color => (color.selected = true ? { ...color, selected: false } : color)
    );
    setColors(newItems);
    setColors(prevColors => [newColor, ...prevColors]);
    setSelectedColor(newColor);
  };

  const listColors = color => {
    const newItems = [...colors].map(
      color => (color.selected = true ? { ...color, selected: false } : color)
    );
    setColors(newItems);
    setColors(prevColors => [color, ...prevColors]);
    setSelectedColor(color);
  };

  const onItemClicked = id => {
    const newItems = [...colors].map(
      color => (color.selected = true ? { ...color, selected: false } : color)
    );
    const item = newItems.find(item => item.id === id);
    item.selected = true;
    setColors(newItems);
    setSelectedColor(item);
  };

  const moveUp = id => {
    const newColors = [...colors];
    const currentColor = newColors.findIndex(color => color.id === id);

    if (currentColor === 0) return;
    [newColors[currentColor], newColors[currentColor - 1]] = [
      newColors[currentColor - 1],
      newColors[currentColor],
    ];

    setColors(newColors);
  };

  const moveDown = id => {
    const newColors = [...colors];
    const currentColor = newColors.findIndex(color => color.id === id);

    if (currentColor === newColors.length - 1) return;
    [newColors[currentColor], newColors[currentColor + 1]] = [
      newColors[currentColor + 1],
      newColors[currentColor],
    ];

    setColors(newColors);
  };

  return (
    <div className="container">
      <Button
        onListColors={listColors}
        colors={colors}
        selectedColor={selectedColor}
      >
        Fetch Colors
      </Button>
      <List
        colors={colors}
        onItemClicked={onItemClicked}
        moveUp={moveUp}
        moveDown={moveDown}
        addColor={addColor}
      />
    </div>
  );
}

export default App;
