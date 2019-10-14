import { GET_CONTACTS } from "../actions/types";
import { DELETE_CONTACT } from "../actions/types";
import { ADD_CONTACT } from "../actions/types";

const initialState = {
  contacts: [
    {
      id: 1,
      name: "John Doe",
      email: "john@email.com",
      message: "i have a complaint"
    },
    {
      id: 2,
      name: "Raksha Mcshan",
      email: "raksha@email.com",
      message: "i am a good dog"
    },
    {
      id: 3,
      name: "Karen Doe",
      email: "karen@email.com",
      message: "i would like to speak with the manager"
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };

    default:
      return state;
  }
}
