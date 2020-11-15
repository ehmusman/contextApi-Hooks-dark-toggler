import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Counter from './components/Counter'
import Toggler from './components/Toggler'
function App() {
  const [count, setCount] = useState(0);
  const [day, setDay] = useState(true)
  return (
    <div className="App" style={{ height: '100vh', backgroundColor: 'yellow' }}>
      <Toggler

      />
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
