import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "./data";
import { reducer } from "./Reducer";

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const App = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const submitHandler = (event) => {
    event.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name: name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const changeHandler = (event) => setName(event.target.value);

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <React.Fragment>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={submitHandler}>
        <div>
          <input type="text" value={name} onChange={changeHandler} />
          <button>Add</button>
        </div>
      </form>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              onClick={() => {
                dispatch({ type: "REMOVE_ITEM", payload: person.id });
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default App;
