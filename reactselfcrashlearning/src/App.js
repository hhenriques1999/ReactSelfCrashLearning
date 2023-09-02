import './App.css';
import React, { useEffect, useState } from 'react';
import CounterComponent from './CounterComponent';

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

function CleanupTest() {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("This runs after 1 second");
    }, 1000);

    return () => {
      clearTimeout(timer);
    }
  }, []);
}

// This component is to be used to include all the main content for the website
function Content() {
  return (
    <>
      <CounterComponent />
      <CleanupTest/>
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
