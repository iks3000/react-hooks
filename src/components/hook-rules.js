import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { codeStringHookRules } from './code';

const HookRules = () => {
  const [name, setName] = useState("Jon");
  const [age, setAge] = useState(24);
  const [rate, setRate] = useState(25);

  const onChangeName = (event) => setName(event.target.value);
  const onChangeAge = (event) => setAge(event.target.value);
  const onChangeRate = (event) => setRate(event.target.value);

  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <div className="card text-white bg-dark d-inline-flex" style={{width: "25rem"}}>
          <div className="card-header">Правила и ограничения хуков:</div>
          <div className="card-body">
            <ul className="card-text pl-3">
              <li>Хуки нельзя использовать в циклах и условиях</li>
              <li>Хуки можно использовать только в React компонентах т в других хуках</li>
              <li>Хуки нельзя использовать в классах</li>
              <li>Не все возможности React можно реализоватьпри помощи хуков (например,
              componentDidCatch() работает только в классах)</li>
            </ul>
          </div>
        </div>

        <div className="card text-white bg-dark d-inline-flex" style={{ width: "37rem" }}>
          <div className="card-header">Code:</div>
          <div className="card-body">
            <SyntaxHighlighter style={docco}>
              {codeStringHookRules}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>

      <div className="form-inline d-flex justify-content-around w-75 m-auto">
        <div>
          Name: <input type="text" className="form-control" value={name} onChange={onChangeName} />
        </div>
        <div>
          Age: <input type="number" className="form-control" value={age} onChange={onChangeAge } />
        </div>
        <div>
          Rate: <input type="number" className="form-control" value={rate} onChange={onChangeRate} />
        </div>
      </div>

      <h3 className="text-center mt-3">
        {name} is {age} year old his rate is ${rate} per hour
      </h3>
    </>
  )
}

export default HookRules;
