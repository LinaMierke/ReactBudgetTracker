import React from "react";

const AddExpenseForm = () => {
  return (
    <div>
      <form>
        <div className="row">
          <div className="col-sm col-lg-4">
            <label for="name">Name</label>
            <input
              required="required"
              type="text"
              className="form-control"
              id="name"
            ></input>
          </div>

          <div className="col-sm col-lg-4">
            <label for="cost">Cost</label>
            <input
              required="required"
              type="text"
              className="form-control"
              id="cost"
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
