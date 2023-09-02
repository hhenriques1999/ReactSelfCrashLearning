import './App.css';
// import MyClassComponent from './MyClassComponent';
// import { useEffect, useState } from 'react';
import MyFunctionalComponent from './MyFunctionalComponent';

// const element = <h1>Trance Around The World, with Above & Beyond</h1>;
// const elementWithClass = <h2 className="anjunaStyle">Anjunabeats</h2>;
// const elementNesting = (
//   <div>
//     <h1>Ilan Bluestone</h1>
//     <p>Impulse</p>
//   </div>
// );
// const embeddingContent = "3 cars";
// const johnHas = <h1>John has {embeddingContent}</h1>;
// const selfClosingTag = <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII" alt="Description" />

// const isJono = true;

// const conditionalContent = isJono ? <p>Yes it is</p> : <p>No, it isn't</p>;

// const numbers = [1, 2, 3];

// const listItems = numbers.map(num => <li key={num}>{num}</li>)

// const listWithWords = (
//   <>
//     Here's a list of items
//     <>
//       {listItems}
//     </>
//   </>
// )

function ParentAndChildCommunication() {
  const sayHello = (name) => alert(`Hello, ${name}`);

  return <ChildComponentCommunication greet={sayHello}/>
}

// This child component holds a bridge to the parent in such a way that when the local function here is called, 
// the parent will receive the value and will be able to use it as it may wish to.
function ChildComponentCommunication({greet}) {
  return <button onClick={() => greet('John')}>Click me!</button>
}

// This component is a parent component that has a child component with props being passed to it
function ParentComponent() {
  return <ChildComponent name="Jono" age={69} />;
}

// This component is a child component that can receive props
function ChildComponent(props) {
  return (
    <>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </>
  );
}

// The code below sets default values for the properties of the ChildComponent
ChildComponent.defaultProps = {
  name: "Unknown",
  age: 0,
}

// This component is a child component that destructures the data
function ChildForDestructuring({ album, artist }) {
  return (
    <>
      <p>Album: {album}</p>
      <p>Artist: {artist}</p>
    </>
  );
}

// This component is a parent component that sends data to a child component that will be destructuring it
function PropDestructuring() {
  return <ChildForDestructuring album="Endless Summer" artist="The Midnight" />;
}

// This component includes a counter that updates its value dynamically
// function Counter() {
//   const [count, setCount] = useState(0);
//   return <button onClick={() => setCount(count + 1)}>Increment Me! {count}</button>
// }

// This component is a header
function Header() {
  return (
    <>
      I am this website's Header!
      <hr />
    </>
  );
}

// This component is a footer
function Footer() {
  return (
    <>
      <hr />
      I am this app's Footer!
    </>
  );
}

// This component is to be used to include all the main content for the website
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
      {/* <MyClassComponent /> */}
      <MyFunctionalComponent name="Jono" />
      <MyFunctionalComponent name="Paavo" />
      <MyFunctionalComponent name="Tony" />
      <PropDestructuring />
      <ParentComponent />
      <ChildComponent/> {/* This is a child component being called in the raw form in order to understand default values */}
      <ParentAndChildCommunication/>
      {/* <Counter /> */}
      {/* <UseEffectLearning/> */}
    </>
  );
}

// This component is to understand the useEffect action which triggers on every page refresh/update and so forth
// function UseEffectLearning() {
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(response => response.json())
//       .then(data => console.log(data));
//   }, []);
//   return <div>Check the console for data!!!</div>
// }

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
