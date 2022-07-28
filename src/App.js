import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import AddExpense from "./pages/Addexpense/AddExpense";
import Home from "./pages/home/index";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add-expense" component={AddExpense} />
      </Switch>
    </Router>
  );
};

export default App;
