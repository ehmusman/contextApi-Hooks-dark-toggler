import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0);
  const [isMorning, setMorning] = useState(true);


  return (
    <div className={isMorning ? "day" : "night"}>
      <button
        className="btn btn-dark btn-lg mt-5 ml-5"
        onClick={() => setMorning(!isMorning)}
      >
        Toggle Day
      </button>
      <h3 className="pl-5 pt-5">This is {isMorning ? "Day" : "Dark"} Mode</h3>
      <br />
      <button className="btn btn-primary btn-lg mt-5 ml-5" onClick={() => setCount(count + 1)}>
        Click Me
      </button>
      <Counter
        count={count}
      />
    </div>
  );
}

export default App;
