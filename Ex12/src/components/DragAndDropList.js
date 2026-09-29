import React, { useState } from 'react';

function DragAndDropList() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Cho phép drop
  };

  const handleDrop = (targetIndex) => {
    if (draggingItem === null) return;

    const updatedItems = [...items];
    const [draggedContent] = updatedItems.splice(draggingItem, 1);
    updatedItems.splice(targetIndex, 0, draggedContent);

    setItems(updatedItems);
    setDraggingItem(null);
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  return (
    <div style={{ margin: '20px', textAlign: 'center' }}>
      <ul style={{ listStyleType: 'disc', padding: 0, display: 'inline-block', textAlign: 'left' }}>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            onDragEnd={handleDragEnd}
            style={{
              fontSize: '24px',
              padding: '8px 16px',
              cursor: 'grab',
              opacity: draggingItem === index ? 0.5 : 1
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DragAndDropList;