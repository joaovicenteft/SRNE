import React, {useState} from 'react';
import Header from './Header';


function App() {


    // the function useState is part of iteration of a variable
    const [counter, setCounter] = useState(0);

    function increment() {
      setCounter(counter + 1);
    }

    return (
      <div>
        <Header> Contador: {counter} </Header>
        <button onClick={increment}> Increment </button>
      </div>
    );
}

export default App;
