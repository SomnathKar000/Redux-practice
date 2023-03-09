export const addNumber = (e) => {
  return {
    type: "add",
    value: e,
  };
};

export const subtractNumber = (e) => {
  return {
    type: "remove",
    value: e,
  };
};
