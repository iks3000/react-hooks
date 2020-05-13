import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { codeStringUseState } from './code';

const AppUseState = () => {
  return  <HookSwitcher />
};

const HookSwitcher = () => {
  const [color, setColor] = useState('card text-white bg-dark d-inline-flex');
  const [fontSize, setFontSize] = useState(14);

  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <div className={color} style={{ width: "20rem" }}>
          <div className="card-body">
            <button className="btn btn-primary shadow-none mr-2" onClick={() => setColor('text-white bg-dark')}>Dark</button>
            <button className="btn btn-primary shadow-none mr-2" onClick={() => setColor('text-dark bg-white')}>Light</button>
            <button className="btn btn-primary shadow-none mr-2" onClick={() => setFontSize((s) => s - 2)}>-</button>
            <button className="btn btn-primary shadow-none" onClick={() => setFontSize((s) => s + 2)}>+</button>
            <p className="mt-2" style={{ fontSize: `${ fontSize }px` }}>
              Hello World
            </p>
          </div>
        </div>

        <div className="card text-white bg-dark d-inline-flex" style={{ width: "42rem" }}>
          <div className="card-header">Code:</div>
          <div className="card-body">
            <SyntaxHighlighter style={docco}>
              {codeStringUseState}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </>
  )
}

export default AppUseState;
