import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState(['Học lập trình .NET', 'Học lập trình Java']);
  const [task, setTask] = useState('');

  const handleAddTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', alignItems: 'flex-start', margin: '20px' }}>
      {/* Form thêm task */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Please input a Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{ padding: '8px', width: '220px' }}
        />
        <button
          onClick={handleAddTodo}
          style={{ backgroundColor: '#e63946', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}
        >
          Add Todo
        </button>
      </div>

      {/* Khung danh sách todo */}
      <div style={{ backgroundColor: '#fff', color: '#000', padding: '20px', borderRadius: '8px', minWidth: '280px' }}>
        <h3 style={{ textAlign: 'center', marginTop: 0 }}>Todo List</h3>
        {todos.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#f1f1f1',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '4px'
            }}
          >
            <span>{item}</span>
            <button
              onClick={() => handleDelete(index)}
              style={{ backgroundColor: '#e63946', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;