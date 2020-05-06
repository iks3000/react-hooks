import React, { useState, useEffect, useCallback, useMemo } from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  const [value, setValue] = useState(1);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div className="mt-5">
        <button className="btn btn-primary btn-sm mr-3" onClick={() => setValue((v) => v + 1)}>+</button>
        <button className="btn btn-primary btn-sm" onClick={() => setVisible(false)}>hide</button>
        <PlanetInfo id={value} />
      </div>
    )
  } else {
    return <button className="btn btn-primary btn-sm mt-5" onClick={() => setVisible(true)}>show</button>
  }
};

const spinner = (
  <div className="spinner-border spinner-border-sm text-success" role="status">
    <span className="sr-only">Loading...</span>
  </div>
)

const getPlanet = (id) => {
  return fetch(`https://swapi.dev/api/planets/${ id }`)
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
  const req = useCallback(() => getPlanet(id), [ id ]);
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
    <div className=" mt-3">{id} - {data.name}</div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
