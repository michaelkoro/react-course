const initialState = {
  user: { userName: "Guest" }
};

export function userReducer(prevState = initialState, action) {
  let nextState;
  switch (action.type) {
    case "LOGIN":
      nextState = {
        user: action.payload
      };
      break;

    case "LOGOUT":
      nextState = initialState;
      break;

    default:
      nextState = prevState;
  }

  console.log("userReducer", { prevState, action, nextState });
  return nextState;
}
