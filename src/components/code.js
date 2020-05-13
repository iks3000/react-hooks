/* eslint-disable no-template-curly-in-string */

const fontSize = '${fontSize}';

export const codeStringUseState = `
  import React, { useState } from 'react';

  const HookSwitcher = () => {
    const [color, setColor] = useState('bg-dark text-white');
    const [ fontSize, setFontSize ] = useState(14)

    return (
      <div className={color} >
        <div>
          <button className={color}
            onClick={() => setColor('bg-dark text-white')}
            >Dark
          </button>
          <button onClick={() => setColor('bg-white')}>Light</button>
          <button onClick={() => setFontSize((s) => s - 2)}>-</button>
          <button onClick={() => setFontSize((s) => s + 2)}>+</button>
        </div>
        <p style={{fontSize: \`${fontSize}px\`}}>
          Hello World
        </p>
      </div>
    )
  }
`;

export const codeStringHookRules = `
  import React, { useState } from 'react';

  const [name, setName] = useState("Jon");
  const onChangeName = (event) => setName(event.target.value);

  <div>
    <input type="text" value={name} onChange={onChangeName} />
    My name is {name}
  </div>
  `;

export const codeStringUseContext = `
  import React, { useContext } from 'react';

  const MyContext = React.createContext();

  const AppUseContext = () => {
    return (
      <MyContext.Provider value="Hello World 123">
        <Child />
      </MyContext.Provider>
    )
  };

  const Child = () => {
    const value = useContext(MyContext)
    return <p>{value}</p>
  }
`;

export const codeStringUseEffectExercises = `
  import React, { useState, useEffect } from 'react';

  const UseEffectExrcise = () => {
    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(true);

    if (visible) {
      return (
        <div>
          <button onClick={() => setValue((v) => v + 1)}>+</button>
          <button onClick={() => setVisible(false)}>Hide</button>
          <HookCounter value={value} />
          <Notification />
        </div>
      )
    } else {
      return <button onClick={() => setVisible(true)}>Show</button>
    }
  };

  const HookCounter = ({ value }) => <p>{value}</p>;

  const Notification = () => {
    const [visible, setVisible] = useState(true);
    const [counter, setCounter] = useState(5)

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
  }
`;

export const codeStringUseEffect = `
  import React, { Component, useState, useEffect } from 'react';

  const AppUseEffect = () => {
    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(true);

    if (visible) {
      return (
        <div>
          <button onClick={() => setValue((v) => v + 1)}>+</button>
          <button onClick={() => setVisible(false)}>hide</button>
          <ClassCounter value={value} />
          <HookCounter value={value} />
        </div>
      )
    } else {
      return <button onClick={() => setVisible(true)}>show</button>
    }
  };

  const HookCounter = ({ value }) => {
    useEffect(() => {
      console.log('useEffect()');
      return () => console.log('clear')
    }, [value])
    return <p>{value}</p>
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
      return <p>{this.props.value}</p>
    }
  }
`;

const link = 'https://swapi.dev/api/planets/${ id }';
export const codeStringStarWarsPlanet = `
  import React, { useState, useEffect, useCallback, useMemo } from 'react';

  const AppStarWarsPlanets = () => {
    const [value, setValue] = useState(1);
    const [visible, setVisible] = useState(true);

    if (visible) {
      return (
        <div>
          <button onClick={() => setValue((v) => v + 1)}>+</button>
          <button onClick={() => setVisible(false)}>hide</button>
          <PlanetInfo id={value} />
        </div>
      )
    } else {
      return <button onClick={() => setVisible(true)}>show</button>
    }
  };

  const spinner = (
    <div className="spinner-border spinner-border-sm" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )

  const getPlanet = (id) => {
    return fetch(\`${link}\`)
      .then(res => res.json())
      .then(data => data);
  }

  const useRequest = (request) => {
    const initialState = useMemo(() => ({
      data: null,
      loading: true,
      error: null
    }), []);

    const [dataState, setDataState] = useState(initialState)

    useEffect(() => {
      setDataState(initialState);

      let cancelled = false;
      request()
        .then(data => !cancelled && setDataState({
          data,
          loading: false,
          error: null
        }))
        .catch(error => !cancelled && setDataState({
          data: null,
          loading: false,
          error
        }));
      return () => cancelled = true;
    }, [request, initialState]);

    return dataState;
  }

  const usePlanetInfo = (id) => {
    const req = useCallback(() => getPlanet(id), [id]);
    return useRequest(req);
  }

  const PlanetInfo = ({ id }) => {
    const { data, loading, error } = usePlanetInfo(id);

    if (error) {
      return <div className="mt-3">Somthing is wrong</div>
    }

    if (loading) {
      return <div className="mt-3">{spinner}</div>
    }

    return (
      <div className="text-center mt-3">{id} - {data.name}</div>
    )
  }
`;
