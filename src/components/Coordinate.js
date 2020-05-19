import React from "react";
import { connect } from "react-redux";

import { deleteCoord } from "../actions/map";

const Coordinate = ({ coord: { lng, lat, id }, coordinatesDispatch }) => {
  return (
    <div className="coordinate">
      <p>
        Longitude: {lng}, Latitude: {lat}
      </p>
      <button
        onClick={() => {
          coordinatesDispatch(id);
        }}
      >
        X
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  coordinatesDispatch: (id) => dispatch(deleteCoord(id)),
});

export default connect(null, mapDispatchToProps)(Coordinate);
