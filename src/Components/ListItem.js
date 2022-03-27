import React from 'react';
import './ListItem.css';

const ListItem = ({ color, id, onItemClicked, selected, moveUp, moveDown }) => {
  const onClassName = selected => {
    if (selected) return 'list-item bold';
    else return 'list-item';
  };

  return (
    <div className="flex">
      <div className="arr" onClick={() => moveUp(id)}>
        &uarr;
      </div>

      <li
        className={onClassName(selected)}
        style={{
          backgroundColor: color,
        }}
        onClick={() => onItemClicked(id)}
      >
        {color}
      </li>
      <div className="arr" onClick={() => moveDown(id)}>
        &darr;
      </div>
    </div>
  );
};

export default ListItem;
