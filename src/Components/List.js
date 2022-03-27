import React from 'react';
import Input from './Input';
import './List.css';
import ListItem from './ListItem';

const List = ({ colors, onItemClicked, moveUp, moveDown, addColor }) => {
  return (
    <div className="center">
      <ul className="list">
        {colors.map(({ color, id, selected }) => (
          <ListItem
            moveUp={moveUp}
            moveDown={moveDown}
            selected={selected}
            key={id}
            id={id}
            color={color}
            onItemClicked={onItemClicked}
          />
        ))}
      </ul>
      <Input colors={colors} addColor={addColor} />
    </div>
  );
};

export default List;
