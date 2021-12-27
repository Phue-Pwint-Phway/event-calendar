import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../pages/Login/LoginPage";
// import TUICalendar from "../components/TUICalendar"
import Schedule from "../pages/Schedule/Schedule"

const AppRouter = () => (
  <Router>
    <Switch>
      <PublicRoute path="/login" component={LoginPage} />
      <PrivateRoute path="/schedule" component={Schedule} />

      {/* Redirect all 404's to home */}
      <Redirect to='/schedule' />
    </Switch>
  </Router>
);

export default AppRouter;
