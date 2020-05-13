import React, { useState, useEffect, useCallback, useMemo } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { codeStringStarWarsPlanet } from './code';

const AppStarWarsPlanets = () => {
  const [value, setValue] = useState(1);
  const [visible, setVisible] = useState(true);

  const buttomVisible = (
    <>
      <div className="d-flex justify-content-center mr-auto">
        <button className="btn btn-primary btn-sm shadow-none mr-3" onClick={() => setValue((v) => v + 1)}>Next</button>
        <button className="btn btn-primary btn-sm shadow-none" onClick={() => setVisible(false)}>Hide</button>
      </div>
      <PlanetInfo id={value} />
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
        <div className="card d-inline-flex" style={{ width: "17rem" }}>
          <div className="card-body">
            <div className="d-flex justify-content-center">
              <div className="card text-white bg-dark d-inline-flex" style={{ height: "10rem", width: "15rem" }}>
                <div className="card-header">StarWars Planets</div>
                <div className="card-body">
                  {visible ? buttomVisible : buttomHide}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card text-white bg-dark d-inline-flex" style={{ width: "43rem" }}>
          <div className="card-header">Code:</div>
          <div className="card-body">
            <SyntaxHighlighter style={docco}>
              {codeStringStarWarsPlanet}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>








    </>

  )
};

const spinner = (
  <div className="d-flex justify-content-center">
    <div className="spinner-border spinner-border-sm text-success" role="status">
      <span className="sr-only">Loading...</span>
    </div>
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

export default AppStarWarsPlanets;
