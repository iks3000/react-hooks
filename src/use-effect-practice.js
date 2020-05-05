import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div>
        <button onClick={() => setValue((v) => v + 1)}>+</button>
        <button onClick={() => setVisible(false)}>hide</button>
        <HookCounter value={value} />
        <Notification />
      </div>
    )
  } else {
    return <button onClick={() => setVisible(true)}>show</button>
  }
};

const HookCounter = ({ value }) => {

  useEffect(() => console.log('mount'), []);
  useEffect(() => console.log('update'));
  useEffect(() => () => console.log('unmount'), []);

// ========= (mount + unmount) ==============
  useEffect(() => {
    console.log('mount');
    return () => console.log('unmount');
  }, []);
// ==========================================

  return <p>{value}</p>
}

const Notification = () => {
  const [visible, setVisible] = useState(true);

  // ===== effect + cleanup (mount + unmount)
  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timeout);
  }, [])
  return (
    <div>
      {visible && <p>Hello</p>}
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
