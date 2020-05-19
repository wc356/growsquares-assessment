//Just a backbone for you to work off of
export default (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.coord];
    case "DELETE":
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
