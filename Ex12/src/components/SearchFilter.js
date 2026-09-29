import React, { useState } from 'react';

function SearchFilter() {
  const [query, setQuery] = useState('');
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <input
        type="text"
        placeholder="Search items..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '8px', fontSize: '16px', marginBottom: '15px', width: '200px' }}
      />
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredItems.map((item, index) => (
          <li key={index} style={{ fontSize: '18px', margin: '5px 0' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;