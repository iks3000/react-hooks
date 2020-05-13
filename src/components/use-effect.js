import React, { Component, useState, useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { codeStringUseEffect } from './code';

const AppUseEffect = () => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);

  const buttomVisible = (
    <>
      <div className="d-flex justify-content-center mr-auto">
        <button className="btn btn-primary btn-sm shadow-none mr-3" onClick={() => setValue((v) => v + 1)}>+</button>
        <button className="btn btn-primary btn-sm shadow-none" onClick={() => setVisible(false)}>Hide</button>
      </div>
      <div className="mt-3">
        ClassCounter: <ClassCounter value={value} /><br/>
        HookCounter: <HookCounter value={value} />
      </div>
    </>
  );

  const buttomHide = (
    <div className="d-flex justify-content-center">
      <button className="btn btn-primary btn-sm shadow-none" onClick={() => setVisible(true)}>Show</button>
    </div>
  )

  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <div className="card d-inline-flex" style={{ width: "22rem" }}>
          <div className="card-body">
            <div className="d-flex justify-content-center">
              <div className="card text-white bg-dark d-inline-flex" style={{ height: "15rem"}}>
                <div className="card-header">useEffect</div>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>{visible ? buttomVisible : buttomHide}</div>
                  <h4 className="text-warning">Look at the console!</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card text-white bg-dark d-inline-flex" style={{ width: "40rem" }}>
          <div className="card-header">Code:</div>
          <div className="card-body">
            <SyntaxHighlighter style={docco}>
              {codeStringUseEffect}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </>
  )
};

const HookCounter = ({ value }) => {
  useEffect(() => {
    console.log('useEffect()');
    return () => console.log('clear')
  }, [value])
  return <span>{value}</span>
}

class ClassCounter extends Component {
  componentDidMount() {
    console.log('class: mount');
  }

  componentDidUpdate() {
    console.log('class: update');
  }

  componentWillUnmount() {
    console.log('class: unmount');
  }

  render() {
    return <span>{this.props.value}</span>
  }
}

export default AppUseEffect;
