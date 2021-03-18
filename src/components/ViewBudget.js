import React from "react";

const ViewBudget = (props) => {
  return(
      <>
        <span> Budget: ${props.budget}</span>
        <buttton type='button' class='btn btn-primary' onClick={props.handleEditClick}> Edit</buttton>
      </>
  )
};

export default ViewBudget;
