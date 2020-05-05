import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <>
      <HooSwaitcher />
    </>
  )
};

const HooSwaitcher = () => {

  const [ color, setColor ] = useState('gray');
  const [ fontSize, setFontSize ] = useState(14)

  return (
    <div style={{ padding: '10px', background: color, fontSize: `${ fontSize }px` }}>
      Hello World
      <button onClick={() => setColor('gray')}>Gray</button>
      <button onClick={() => setColor('white')}>Light</button>
      <button onClick={() => setFontSize((s) => s + 2)}>+</button>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
