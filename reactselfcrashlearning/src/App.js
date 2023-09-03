import './App.css';
import React, { useEffect, useState } from 'react';
import ControlledInput from './ControlledInput';
import MultipleControlledInputs from "./MultipleControlledInputs";


// This component is the main app's component and should really only include the header, footer and content (child components)
function App() {
  return (
    <div>
      <h1>Controlled Component</h1>
      <ControlledInput />
      <MultipleControlledInputs/>
    </div>
  );
}

export default App;
