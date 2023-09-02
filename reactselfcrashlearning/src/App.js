import './App.css';
import React from 'react';

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
    <>
      Hello World!
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
