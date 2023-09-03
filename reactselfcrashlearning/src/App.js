import './App.css';
import React, { useEffect, useState } from 'react';

// This component is the main app's component and should really only include the header, footer and content (child components)
function App() {
  const handleClick = () => {
    alert('Button clicked');
  };

  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    console.log(`Pressed key: ${e.key}`);
  };

  const handleClick2 = (id, e) => {
    console.log(`Button ${id} was clicked`);
  }

  return (
    <>
      <button className='btn btn-primary' onClick={handleClick}>Press me</button>
      <input className="form-control" type="text" value={inputValue} onChange={handleChange}/>
      <input type="text" onKeyPress={handleKeyPress}></input>
      <button className="btn btn-warning" onClick={(e) => handleClick2(1, e)}>Click Me</button>
    </>
  );
}

export default App;
