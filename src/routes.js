import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import UserItem from "./components/UserItem";
import newMember from "./components/newMember";
import editMember from "./components/editMember";
import Profile from "./components/profile";

import history from "./history";

const Routes = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={UserItem} />
          <Route path="/addMember" component={newMember} />
          <Route path="/editMember" component={editMember} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
