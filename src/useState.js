import React, { useState } from 'react';

const INITIAL_LIST = [
  {
    id: '0',
    title: 'Github',
    url:
      'https://github.com/ervan0707',
  },
  {
    id: '1',
    title: 'Twitter',
    url: 'https://twitter.com/ervan0707',
  },
];

function App() {
  const [list, setList] = useState(INITIAL_LIST);

  function onRemoveItem(id) {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
  }

  return (
    <ul>
      {list.map(item => (
        <li key={item.id}>
          <a href={item.url}>{item.title}</a>
          <button type="button" onClick={() => onRemoveItem(item.id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default App;