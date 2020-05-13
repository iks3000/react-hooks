import React, { useState, useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { codeStringUseEffectExercises } from './code';

const UseEffectExrcise = () => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);

  const buttomVisible = (
    <>
      <div className="d-flex justify-content-center mr-auto">
        <button className="btn btn-primary btn-sm shadow-none mr-3" onClick={() => setValue((v) => v + 1)}>+</button>
        <button className="btn btn-primary btn-sm shadow-none" onClick={() => setVisible(false)}>Hide</button>
      </div>
      <HookCounter value={value} />
      <Notification/>
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
        <div className="card d-inline-flex" style={{ width: "20rem" }}>
          <div className="card-body">
            <div className="d-flex justify-content-center">
              <div className="card text-white bg-dark d-inline-flex" style={{ height: "15rem", width: "15rem" }}>
                <div className="card-header">useEffect Exercise</div>
                <div className="card-body">
                  {visible ? buttomVisible : buttomHide}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card text-white bg-dark d-inline-flex" style={{ width: "40rem" }}>
          <div className="card-header">Code:</div>
          <div className="card-body">
            <SyntaxHighlighter style={docco}>
              {codeStringUseEffectExercises}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </>
  )
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

  return <h3 className="text-center pt-3">{value}</h3>
}

const Notification = () => {
  const [visible, setVisible] = useState(true);
  const [counter, setCounter] = useState(5)

  // ===== effect + cleanup (mount + unmount)
  useEffect(() => {
    const timeout = counter > 0 ?
      setInterval(() => setCounter(counter - 1), 1000) :
      setVisible(false);

    return () => clearTimeout(timeout);
  }, [visible, counter])
  return (
    <div className="text-center">
      {visible && <p>I'll hide in {counter} seconds</p>}
    </div>
  )
};

/*
const Notification = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timeout);
  }, [])
  return (
    <div className="text-center">
      {visible && <p>I'll hide in 3 seconds</p>}
    </div>
  )
}
*/

export default UseEffectExrcise;
