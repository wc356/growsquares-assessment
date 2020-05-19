import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { v4 as uuidv4 } from "uuid";
import mapboxgl from "mapbox-gl";

import { addCoord } from "../actions/map";

import "../styles/components/_map.scss";

const Map = ({ mapContainer, coordinatesDispatch }) => {
  const [mapCoord] = useState({ lat: 40.7275, lng: -74 });
  const [pointerCoord, setPointerCoord] = useState({
    lat: undefined,
    lng: undefined,
  });
  const [zoom] = useState(13);

  mapboxgl.accessToken =
    "pk.eyJ1Ijoid3ljaG9pMzU2IiwiYSI6ImNrYWN5bHQwbDAxdmgzNWxkeHY5NWdzNHMifQ.brG5JqCWNOlBTxFX1kJEBw";

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [mapCoord.lng, mapCoord.lat],
      zoom: zoom,
    });

    map.on("mousemove", (e) => {
      setPointerCoord({ lat: e.lngLat.lat, lng: e.lngLat.lng });
    });

    map.on("click", (e) => {
      const clickCoord = {
        id: uuidv4(),
        lat: e.lngLat.lat,
        lng: e.lngLat.lng,
      };
      coordinatesDispatch(clickCoord);
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="sidebarStyle">
        <div id="info">
          Current Longitude: {pointerCoord.lng} | Latitude: {pointerCoord.lat}
        </div>
      </div>
      <div ref={(el) => (mapContainer = el)} className="mapContainer" />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  coordinatesDispatch: (coordinate) => dispatch(addCoord(coordinate)),
});

export default connect(null, mapDispatchToProps)(Map);
