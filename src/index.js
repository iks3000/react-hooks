import React, { useState, useEffect } from 'react';
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

const loading = (
  <div class="spinner-border spinner-border-sm text-success" role="status">
    <span class="sr-only">Loading...</span>
  </div>
)

const usePlanetInfo = (id) => {
  const [planet, setPlanet] = useState(loading)

  useEffect(() => {
    let cancelled = false;
    fetch(`https://swapi.dev/api/planets/${ id }`)
      .then(res => res.json())
      .then(data => !cancelled && setPlanet(data.name));
    return () => cancelled = true;
  }, [id]);

  return planet;
}

const PlanetInfo = ({ id }) => {
  const namePlanet = usePlanetInfo(id);
  return (
    <div className="mt-3">{id} - {namePlanet}</div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
