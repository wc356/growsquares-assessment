import React from "react";

import Map from "../components/Map";
import CoordinatesDashboard from "../components/CoordinatesDashboard";

import "../styles/components/_mapContainer.scss";

const MapContainer = () => (
  <div className="flex-container">
    <Map />
    <CoordinatesDashboard />
  </div>
);

export default MapContainer;
