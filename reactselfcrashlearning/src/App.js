import './App.css';

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
      Clean!
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
