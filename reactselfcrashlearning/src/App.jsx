import './App.css';
import React, { useEffect, useState } from 'react';

// This component is the main app's component and should really only include the header, footer and content (child components)
function App() {
  return (
    <div className='mt-2' style={{width: "25%"}}>
      <select className='form-control' name="test" id="test">
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </div>
  );
}

export default App;
