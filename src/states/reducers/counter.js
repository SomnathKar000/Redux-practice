const counter = (state = 0, action) => {
  if (action.type === "add") {
    return state + action.value;
  } else if (action.type === "remove") {
    return state - action.value;
  } else {
    return state;
  }
};
export default counter;
