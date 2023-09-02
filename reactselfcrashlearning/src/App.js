import './App.css';
import React, { useEffect, useState } from 'react';

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

function WelcomeMessage({ user }) {
  return <h1>Welcome, {user.name}</h1>
}

function SignInMessage() {
  return <h1>Please, sign in!</h1>
}

function Notification({ type }) {
  switch (type) {
    case 'success':
      return <div className='success'>Success!</div>
    case 'error':
      return <div className='error'>Error!</div>
    default:
      return <div className='info'>Info!</div>
  }
}

// This component is to be used to include all the main content for the website
function Content() {
  const isLoggedIn = true;
  const tasks = ['Task 1', 'Task 2']

  const user = null;
  let message;

  const user2 = { name: "John" }

  if (user) {
    message = <h1>Hello, {user.name}!</h1>
  }
  else {
    message = <h1>Please, sign in.</h1>
  }

  return (
    <>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
      {tasks.length > 0 && <h1>You have tasks to complete.</h1>}
      {message}
      {user2 ? <WelcomeMessage user={user2} /> : <SignInMessage />}
      {<Notification type="success" />}
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
