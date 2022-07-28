import React from "react";
import ExpenseList from "../../components/ExpenseList/ExpenseList";
import Topfold from "../../components/Topfold/Topfold";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Topfold />
      <ExpenseList />
    </div>
  );
};

export default Home;
