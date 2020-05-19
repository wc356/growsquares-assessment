import React from "react";
import { connect } from "react-redux";

import Coordinate from "./Coordinate";

const CoordinatesList = ({ coordinates: { coordinates } }) => {
  return coordinates.map((coordinate) => (
    <Coordinate key={coordinate.id} coord={coordinate} />
  ));
};

const mapStateToProps = (state) => ({
  coordinates: state,
});

export default connect(mapStateToProps)(CoordinatesList);
