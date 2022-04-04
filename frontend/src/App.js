import * as React from 'react';
import Map from 'react-map-gl';


function App() {
  return (
    <Map
      mapboxAccessToken={process.env.REACT_APP_MAPBOX}
      initialViewState={{
        longitude: 17,
        latitude: 46,
        zoom: 4
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}

export default App;
