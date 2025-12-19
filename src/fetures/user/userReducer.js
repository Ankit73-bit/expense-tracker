import { v4 as uuidV4 } from "uuid";

const initialState = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  contact: 0,
  address: "",
  panNumber: "",
  transactionId: "",
  isActive: false,
  isLoggedIn: false,
};

function userReducer(state, action) {
  switch (action.type) {
    case "Signup":
      return {};
    default:
      initialState;
  }
}
