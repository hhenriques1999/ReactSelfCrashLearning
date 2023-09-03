import './App.css';
import React, { useEffect, useState } from 'react';

// This component is the main app's component and should really only include the header, footer and content (child components)
const App = () => {
    return (
      <div>
        <Card>
          <h1>A title</h1>
          <div>Some extra stuff!</div>
        </Card>
        <CloseButton/>
        <ListWithData
          data={['apple', 'orange', 'banyanyan']}
          render={(item, index) => <div key={index}>{item}</div>}
        />
        <HelloWithLogging/>
        <BootstrapButtonWithLogging label="Click me too!"/>
        <BootstrapButtonWithOnClick label="Click meee"/>
      </div>
    );
};

const Card = (props) => {
  return (
    <div className='card'>
      {props.children}
    </div>
  );
};

const Header = () => <h1>Hello, world!</h1>;

const MainContent = () => <p>This is the main content.</p>;

const Footer = () => <p>This is the footer.</p>;

const Button = ({onClick, children}) => (
  <button className='btn btn-secondary' onClick={onClick}>{children}</button>
);

const CloseButton = ({onClick}) => (
  <Button onClick={onClick}>Close</Button>
);

const withLogging = (WrappedComponent, trackingId) => {
  return (props) => {
    console.log(`Rendering ${WrappedComponent.name}, trackingId: ${trackingId}`);
    return <WrappedComponent {...props} />;
  }
}

const withTracking = (WrappedComponent, trackingId) => {
  return (props) => {
    const handleClick = (e) => {
      // Tracking logic here
      console.log(`Tracked event: ${trackingId}`);

      // Call the original onClick, if provided
      if (props.onClick) {
        props.onClick(e);
      }
    };

    return <WrappedComponent {...props} onClick={handleClick} />;
  };
};

const Hello = () => <h1>Hello!</h1>;

const HelloWithLogging = withLogging(Hello, "hello_el");

const BootstrapButton = ({label, onClick}) => <button className="btn btn-primary" onClick={onClick}>{label}</button>;

const BootstrapButtonWithOnClick = withTracking(BootstrapButton, "button_1");

const BootstrapButtonWithLogging = withLogging(BootstrapButton, "button_2");

const ListWithData = ({data, render}) => {
  return (
    <div>
      {data.map((item, index) => render(item, index))}
    </div>
  );
};


export default App;
