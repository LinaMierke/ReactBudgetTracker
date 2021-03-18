import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import {AppContext} from '../context/AppContext'

const ExpenseList = () => {
  //“useContext” hook is used to create common data that can be accessed throughout the component hierarchy without passing the props down manually to each level. Context defined will be available to all the child components without involving “props”.
  const { expenses } = useContext(AppContext);
  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem
          id={expense.id}
          name={expense.name}
          cost={expense.cost}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
