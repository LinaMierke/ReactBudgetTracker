import React, {useContext, useState} from "react";
import {AppContext} from '../context/AppContext'

const AddExpenseForm = () => {
  const {dispatch} = useContext(AppContext);
  const [name, setname] = useState('');
  const [cost, setCost] = useState('')

  //stop page for being reload it when the user click the submit
const onSubmit = (event) => {
  event.preventDefault();
  const expense = {
    name: name,
    cost: parseInt(cost),
  }

}
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-sm col-lg-4">
            <label for="name">Name</label>
            <input
              required="required"
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(event) => setname(event.target.value)}
            ></input>
          </div>

          <div className="col-sm col-lg-4">
            <label for="cost">Cost</label>
            <input
              required="required"
              type="text"
              className="form-control"
              id="cost"
              value={cost}
              onChange={(event) => setCost(event.target.value)}
            ></input>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddExpenseForm;
