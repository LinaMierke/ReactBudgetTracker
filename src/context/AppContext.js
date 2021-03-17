import { createContext, useReducer } from "react";
const AppReducer = (state, action) => {
    switch(action.type) {
        default: 
            return state
    }
}

//this folder hold and is able to pass info so redux is not necesary for this app
const initialState = {
  budget: 2000,
  expenses: [
    { id: 12, name: "shopping", cost: 40 },
    { id: 13, name: "holiday", cost: 400 },
    { id: 15, name: "car service", cost: 300 },
  ],
};
// understand state: is the initial observational information that can be change, props is the propeties of description that can't be change for an object like the id, or other name or age etc the propeties and the values are state becaus ethey can change

//-----------------------------------------------
//Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.
export const AppContext = createContext();

//CreateContext: holds the state and pass it to the components

// userreducer: const [state, dispatch] = useReducer(reducer, initialState);
//The first and most important thing to understand about a reducer is that it will always only return one value. useful for applying a bit of logic to a group of values and ending up with another single result.
//^^^It’s the same sort of concept, but returns two elements as an array, the current state and a dispatch function.
//A reducer is a pure function that takes the previous state and an action as arguments and returns a new state.

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (<AppContext.Provider value={{
      budget: state.budget,
      expenses: state.expenses,
      dispatch,
  }}>
      {props.children}
  </AppContext.Provider>)
};
