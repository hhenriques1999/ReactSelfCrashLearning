import './App.css';
import MyClassComponent from './MyClassComponent';
import { useState } from 'react';
import MyFunctionalComponent from './MyFunctionalComponent';

const element = <h1>Trance Around The World, with Above & Beyond</h1>;
const elementWithClass = <h2 className="anjunaStyle">Anjunabeats</h2>;
const elementNesting = (
  <div>
    <h1>Ilan Bluestone</h1>
    <p>Impulse</p>
  </div>
);
const embeddingContent = "3 cars";
const johnHas = <h1>John has {embeddingContent}</h1>;
const selfClosingTag = <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII" alt="Description" />

const isJono = true;

const conditionalContent = isJono ? <p>Yes it is</p> : <p>No, it isn't</p>;

const numbers = [1, 2, 3];

const listItems = numbers.map(num => <li key={num}>{num}</li>)

const listWithWords = (
  <>
    Here's a list of items
    <>
      {listItems}
    </>
  </>
)


function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Increment Me! {count}</button>
}

function Header() {
  return (
    <>
    I am this website's Header!
    <hr/>
    </>
  );
}

function Footer() {
  return (
    <>
    <hr/>
    I am this app's Footer!
    </>
  );
}

function Content() {
  return (
    <>
      {/* {element}
      {elementWithClass}
      {elementNesting}
      {johnHas}
      {selfClosingTag}
      {conditionalContent}
      {listWithWords} */}
      <MyClassComponent />
      <MyFunctionalComponent name="Jono" />
      <MyFunctionalComponent name="Paavo" />
      <MyFunctionalComponent name="Tony" />
      <Counter/>
    </>
  );
}

function App() {
  return (
    <>
      <Header/>
      <Content/>
      <Footer/>
    </>
  );
}

export default App;
