import React from "react";
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {
  const expenses = [
    { id: 122, name: "Shopping", cost: 50 },
    { id: 123, name: "Holiday", cost: 500 },
    { id: 124, name: "Transportation", cost: 80 },
    { id: 125, name: "Gas", cost: 20 },
    { id: 128, name: "Food", cost: 250 },
  ];
  return (
    <ul className="list-group">
      {expenses.map((expenses) => (
        <ExpenseItem 
            id={expenses.id} 
            name={expenses.name} 
            cost={expenses.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
