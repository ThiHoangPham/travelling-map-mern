import * as React from 'react';
import { useEffect, useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import { Room, Star } from "@material-ui/icons";
import "./app.css";
import axios from "axios";

function App() {
  const [pins, setPins] = useState([]);
  useEffect(() => {
    const getPins = async () => {
      try {
        const res = await axios.get("/pins");
        setPins(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);
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
      {pins.map(p => (
        <>
          <Marker
            latitude={p.lat}
            longitude={p.long}
            offsetLeft={-20}
            offsetTop={-10}>
            <Room style={{ fontSize: visualViewport.zoom * 7, color: "slateblue" }} /></Marker>

          <Popup
            latitude={p.lat}
            longitude={p.long}
            closeButton={true}
            closeOnClick={false}
            anchor="left">
            <div className='card'>
              <label>Place</label>
              <h4 className='place'>{p.title}</h4>
              <label>Review</label>
              <p className='desc'>{p.desc}</p>
              <label>Rating</label>
              <div className='stars'>
                <Star className='star' />
                <Star className='star' />
                <Star className='star' />
                <Star className='star' />
                <Star className='star' />
              </div>
              <label>Information</label>
              <span className='username'>Created by <b>{p.username}</b></span>
              <span className='date'> 2 hours ago</span>
            </div>
          </Popup>
        </>
      ))}
    </Map >
  )
}
export default App;
