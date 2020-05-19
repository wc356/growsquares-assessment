import React, { useContext } from "react";

import CoordinatesContext from "../context/coordinates-context";
import Coordinate from "./Coordinate";

const CoordinatesList = () => {
  const { coordinates } = useContext(CoordinatesContext);

  return coordinates.map((coordinate) => (
    <Coordinate key={coordinate.id} coord={coordinate} />
  ));
};

export default CoordinatesList;
