import React, { useContext } from "react";

import CoordinatesContext from "../context/coordinates-context";
import { deleteCoord } from "../actions/map";

const Coordinate = ({ coord: { lng, lat, id } }) => {
  const { coordinatesDispatch } = useContext(CoordinatesContext);

  return (
    <div className="coordinate">
      <p>
        Longitude: {lng}, Latitude: {lat}
      </p>
      <button
        onClick={() => {
          coordinatesDispatch(deleteCoord(id));
        }}
      >
        X
      </button>
    </div>
  );
};

export default Coordinate;
