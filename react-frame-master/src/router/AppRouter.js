import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../pages/Login/LoginPage";
// import PostPage from "../pages/Post/PostPage";
// import TUICalendar from "../components/TUICalendar"
import TUICalendar from "../pages/Schedule/Schedule"

const AppRouter = () => (
  <Router>
    <Switch>
      <PublicRoute path="/login" component={LoginPage} />
      <PrivateRoute path="/schedule" component={TUICalendar} />
      {/* <PrivateRoute path="/post" component={PostPage} /> */}

      {/* Redirect all 404's to home */}
      <Redirect to='/schedule' />
    </Switch>
  </Router>
);

export default AppRouter;
