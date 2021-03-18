import { createContext, useReducer } from "react";

                //copying  the current existing state and overwrite with the new expenses object, and the expenses object is going to be a copy of the current expenses array with whatever was in the payload added to the end of the array

export const AppReducer = (state, action) => {
    //switch and case are like  aif statement
    switch(action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            };
            case 'DELETE_EXPENSE':
              return {
                ...state,
                expenses: state.expenses.filter (
                  (expense) => expense.id !== action.payload
                ),
              }
        default: 
            return state;
    }
};

//this folder hold and is able to pass info so redux is not necesary for this app
const initialState = {
  budget: 2000,
  expenses: [
    { id: 12, name: 'Shopping', cost: 40 },
    { id: 32, name: 'Holiday', cost: 400 },
    { id: 13, name: 'car service', cost: 50 },
  ],
};
export const AppContext = createContext();
// understand state: is the initial observational information that can be change, props is the propeties of description that can't be change for an object like the id, or other name or age etc the propeties and the values are state becaus ethey can change

//-----------------------------------------------
//Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.


//CreateContext: holds the state and pass it to the components

// useReducer: const [state, dispatch] = useReducer(reducer, initialState);
//The first and most important thing to understand about a reducer is that it will always only return one value. useful for applying a bit of logic to a group of values and ending up with another single result.
//^^^It’s the same sort of concept, but returns two elements as an array, the current state and a dispatch function.
//A reducer is a pure function that takes the previous state and an action as arguments and returns a new state.


export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (<AppContext.Provider 
    value={{
      budget: state.budget,
      expenses: state.expenses,
      dispatch,
  }}
  >
      {props.children}
  </AppContext.Provider>
  );
};
