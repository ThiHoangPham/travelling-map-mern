import * as React from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import { Room, Star } from "@material-ui/icons";
import "./app.css";

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

      <Marker
        latitude={48.858093}
        longitude={2.294694}
        offsetLeft={-20}
        offsetTop={-10}>
        <Room style={{ fontSize: visualViewport.zoom * 7, color: "slateblue" }} /></Marker>

      <Popup
        latitude={48.858093}
        longitude={2.294694}
        closeButton={true}
        closeOnClick={false}
        anchor="left">
        <div className='card'>
          <label>Place</label>
          <h4 className='place'>Eiffell Tower</h4>
          <label>Review</label>
          <p>Beautifull place. I like it.</p>
          <label>Rating</label>
          <div className='stars'>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <label>Information</label>
          <span className='username'>Created by<b>Adam</b></span>
          <span className='date'> 2 hours ago</span>
        </div>
      </Popup>
    </Map >
  )
}
export default App;
