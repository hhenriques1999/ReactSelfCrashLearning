import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import UserList from './UserList';

function UserProfile() {
  const { id } = useParams();
  return <div>User profile for user: {id}</div>;
}

function Home() {
  return (
    <div>
      <Link to="/">Home</Link>&nbsp;|&nbsp;
      <Link to="/about">About</Link>&nbsp;|&nbsp;
      <Link to="/users">User List</Link>
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
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
