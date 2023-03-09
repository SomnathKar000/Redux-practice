const login = (state = false, action) => {
  if (action.type === "yes") {
    return (state = true);
  } else if (action.type === "no") {
    return (state = false);
  } else {
    return (state = false);
  }
};
export default login;
