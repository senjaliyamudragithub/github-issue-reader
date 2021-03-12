import React from "react";
import { Switch, Route } from "react-router-dom";
import SearchContainer from "./components/SearchContainer";
import IssueDetail from "./components/IssueDetail";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import NotFound from "./components/NotFound";
import RepoHeader from "./components/RepoHeader";
const Routes = () => (
  <Navbar>
    <RepoHeader>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/issue/:id" component={IssueDetail} />
        <Route path="/search" exact component={SearchContainer} />
        <Route component={NotFound} />
      </Switch>
    </RepoHeader>
  </Navbar>
);

Routes.propTypes = {};

export default Routes;
