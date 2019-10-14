import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export default class Provider extends Component {
  state = {
    goodThings: [
      {
        id: 1,
        name: "Raksha",
        happyScale: "10",
        status: "goodDog"
      },
      {
        id: 2,
        name: "Mowgli",
        happyScale: "10",
        status: "goodCat"
      },
      {
        id: 1,
        name: "Whitney",
        happyScale: "1000",
        status: "goodWife"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
