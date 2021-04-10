import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DatastructuresPage from "./components/DatastructuresPage";
import HomePage from "./components/HomePage";
import NotFoundPage from "./components/NotFoundPage";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/data_structures" component={DatastructuresPage} />
        <Route exact path="" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
