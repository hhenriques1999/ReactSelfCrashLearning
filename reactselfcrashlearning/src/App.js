import './App.css';
import React, { useEffect, useState } from 'react';

const names = ['Alice', 'Bob', 'Charlie'];

const people = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
  { id: '3', name: 'Charlie' }
];

function PeopleList() {
  return (
    <ul>
      {people.map(person => (
        <li key={person.id}>{person.name}</li>
      ))}
    </ul>
  )
}

function NameList() {
  return  (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}

// This component is the main app's component and should really only include the header, footer and content (child components)
function App() {
  return (
    <>
    <NameList/>
    <PeopleList/>
    </>
  );
}

export default App;
