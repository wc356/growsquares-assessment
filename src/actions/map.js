export const addCoord = (coord) => ({
  type: "ADD",
  coord,
});

export const deleteCoord = (id) => ({
  type: "DELETE",
  id,
});
