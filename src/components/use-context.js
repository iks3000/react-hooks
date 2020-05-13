import React, { useContext } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { codeStringUseContext } from './code';

const MyContext = React.createContext();

const AppUseContext = () => {
  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <div className="card text-white bg-dark d-inline-flex" style={{ width: "25rem" }}>
          <div className="card-body d-flex justify-content-center align-items-center">
            <MyContext.Provider value="Hello World 123">
              <Child />
            </MyContext.Provider>
          </div>
        </div>

        <div className="card text-white bg-dark d-inline-flex" style={{ width: "37rem" }}>
          <div className="card-header">Code:</div>
          <div className="card-body">
            <SyntaxHighlighter style={docco}>
              {codeStringUseContext}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </>
  )
};

const Child = () => {
  const value = useContext(MyContext)
  return <p>{value}</p>
}

export default AppUseContext;
