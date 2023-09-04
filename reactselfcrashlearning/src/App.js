import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <Link to="/">Home</Link>&nbsp;|&nbsp;
      <Link to="/about">About</Link>
    </div>
  )
}

function About() {
  return (
    <div>
      About my page!
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
