import React from "react";
import AddForm from "../../components/AddForm/AddForm";
import Topfold from "../../components/Topfold/Topfold";
import "./AddExpense.css";

const AddExpense = () => {
  return (
    <>
      <div className="add-expense">
        <Topfold />
        <AddForm />
      </div>
    </>
  );
};

export default AddExpense;
