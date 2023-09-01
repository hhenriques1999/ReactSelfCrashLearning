import './App.css';
import MyClassComponent from './MyClassComponent';

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

function MyFunctionalComponent(props) {
  return (
    <>
      <h3>{props.name} is a great producer!</h3>
    </>
  );
}

function App() {
  return (
    <div>
      {element}
      {elementWithClass}
      {elementNesting}
      {johnHas}
      {selfClosingTag}
      {conditionalContent}
      {listWithWords}
      <MyClassComponent />
      <MyFunctionalComponent name="Jono" />
      <MyFunctionalComponent name="Paavo" />
      <MyFunctionalComponent name="Tony" />
    </div>
  );
}

export default App;
