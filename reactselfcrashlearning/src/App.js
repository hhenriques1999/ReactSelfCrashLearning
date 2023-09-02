import './App.css';
import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext();

function CountProvider({children}) {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{count, setCount}}>
      {children}
    </CountContext.Provider>
  );
}

function useCount() {
  return useContext(CountContext);
}

function Counter() {
  const {count,setCount} = useCount();

  return (
    <div className='d-flex gap-2'>
      <p>Count: {count}</p>
      <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Increment</button>
      <button className='btn btn-danger' onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

// This component is a header
function Header() {
  return (
    <>
      <div>
        I am this website's Header!
      </div>
      <hr />
    </>
  );
}

// This component is a footer
function Footer() {
  return (
    <>
      <hr />
      <div>
        I am this app's Footer!
      </div>
    </>
  );
}

// This component is to be used to include all the main content for the website
function Content() {
  return (
    <CountProvider>
      <Counter />
    </CountProvider>
  );
}

// This component is the main app's component and should really only include the header, footer and content (child components)
function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
