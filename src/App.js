import React, {useState} from 'react';
import './App.css';

function App() {

  const [show, setShow] = React.useState(true);

  return (
    <React.Fragment>
      <button style={{marginBottom: '10px'}} onClick={() => show === true ? setShow(false) : setShow(true)}>Hide Element Below</button>
      <div>{show && 'Toggle Challenge'}</div>
    </React.Fragment>
  );
}

export default App;
