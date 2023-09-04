import './App.css';
import React, { useEffect, useState, Suspense } from 'react';

const MyComponent = React.lazy(() => import('./MyComponent'));

// This component is the main app's component and should really only include the header, footer and content (child components)
function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MyComponent></MyComponent>
      </Suspense>
    </div>
  );
}

export default App;
