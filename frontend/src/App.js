import * as React from 'react';
import Map, { Marker } from 'react-map-gl';


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
    >
      <Marker longitude={-100} latitude={40} anchor="bottom" >
        <img src="./pin.png" />
      </Marker>
    </Map>
  )
}
export default App;
