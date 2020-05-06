import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  /**
   * Правила и ограничения хуков:
   *
   * Хуки нельзя использовать в циклах и условиях
   * Хуки можно использовать только в React компонентах т в других хуках
   * Хуки нельзя использовать в классах
   * Не все возможности React можно реализоватьпри помощи хуков (например,
   * componentDidCatch() работает только в классах)
   */

  const [name, setName] = useState('Jon');
  const [age, setAge] = useState(25);
  const [rate, setRate] = useState(25);

  return (
    <div>
      {name} is {age} year  old
      his rate is ${rate} per hour
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);