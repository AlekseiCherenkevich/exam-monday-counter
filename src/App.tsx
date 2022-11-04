import React, {useState} from 'react';

import './App.css';
import Count from "./components/Count";
import Button from "./components/Button";

function App() {
    const [count, setCount] =useState<number>(0)
    const increase = () => {
        if (count < 5) {
            setCount(count + 1)
        }
    }
    const reset = () => {
        setCount(0)
    }
  return (
    <div className="App">
        <Count fontColor={count === 5 ? 'red' : 'black'} count={count}/>
      <>
          <Button isDisabled={count === 5} callback={increase}>inc</Button>
          <Button isDisabled={count === 0} callback={reset}>reset</Button>
      </>
    </div>
  );
}

export default App;
