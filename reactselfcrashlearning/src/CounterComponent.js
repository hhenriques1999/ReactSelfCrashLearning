import { useEffect, useState } from "react";

const CounterComponent = () => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      console.log("Count has changed to " + count);
    }, [count]);
  
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    );
  }
  
  export default CounterComponent;