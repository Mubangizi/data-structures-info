import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DatastructuresPage from "./components/DatastructuresPage";
import HomePage from "./components/HomePage";
import NotFoundPage from "./components/NotFoundPage";
import SortingPage from "./components/SortingPage";
import FunctionsPage from "./components/FunctionsPage";
import SearchingPage from "./components/SearchingPage";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/data_structures" component={DatastructuresPage} />
        <Route exact path="/sorting" component={SortingPage} />
        <Route exact path="/functions" component={FunctionsPage} />
        <Route exact path="/searching" component={SearchingPage} />
        <Route exact path="" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
