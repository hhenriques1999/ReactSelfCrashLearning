import './App.css';
import React, { useEffect, useState } from 'react';

let debounceTimer;

// This component is the main app's component and should really only include the header, footer and content (child components)
function App() {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const searchText = e.target.value;

    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
      setQuery(searchText);
    }, 300);
  }
  
  return (
    <input type="text" placeholder='Search...' onChange={handleSearch}></input>
  );
}

export default App;
