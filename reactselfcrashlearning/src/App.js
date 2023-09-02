import './App.css';
import React, { useEffect, useState } from 'react';
import Dashboard from './dashboard/Dashboard';

const role = "Guest";

// This component is the main app's component and should really only include the header, footer and content (child components)
function App() {
  return (
    <div className='App'>
      <Dashboard role={role} />
    </div>
  );
}

export default App;
