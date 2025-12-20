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
  createdAt: new Date().toISOString(),
};

function userReducer(state, action) {
  switch (action.type) {
    case "Signup":
      return {
        ...state,
        ...action.payload,
        id: uuidV4(),
        transactionId: uuidV4(),
      };
    default:
      return state;
  }
}
