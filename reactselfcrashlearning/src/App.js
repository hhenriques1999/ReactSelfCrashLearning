import './App.css';
import React, { useState } from 'react';

const commonFlexStyle = { "display": "flex", "justify-content": "center", "align-items": "center" };

const headerStyle = { commonFlexStyle, "margin-top": ".25em" };
const footerStyle = { commonFlexStyle, "margin-bottom": ".25em" };

function Counter() {
  const [count, setCounter] = useState(0);

  const increment = () => setCounter(count + 1);
  const decrement = () => setCounter(count - 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increase the counter!</button>&nbsp;
      <button onClick={decrement}>Decrease the counter!</button>
    </div>
  );
}

// This component is a header
function Header() {
  return (
    <>
      <div style={headerStyle}>
        I am this website's Header!
      </div><hr />
    </>
  );
}

// This component is a footer
function Footer() {
  return (
    <>
      <hr />
      <div style={footerStyle}>
        I am this app's Footer!
      </div>
    </>
  );
}

// This component is to be used to include all the main content for the website
function Content() {
  return (
    <>
      <Counter />
    </>
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
