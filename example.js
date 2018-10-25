import React from 'react';
import { render } from 'react-dom';
import useToggle from './';

function App() {
  let { isOpen, open, close, toggle } = useToggle(true);
  return (
    <button onClick={toggle}>
      is {isOpen ? 'opened' : 'closed'}
    </button>
  );
}

render(<App />, window.root);
