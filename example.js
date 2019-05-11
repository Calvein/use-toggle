import React from 'react';
import { render } from 'react-dom';
import useToggle from './';

const App = () => {
  const { isOn, toggle } = useToggle(true);
  
  return (
    <button onClick={toggle}>
      is {isOn ? 'on' : 'off'}
    </button>
  );
}

render(<App />, window.root);
