import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import Dashboard from './views/Dashboard';
import ProductList from './views/ProductList';
import UserList from './views/UserList';
import Typography from './views/Typography';
import Icons from './views/Icons';
import Account from './views/Account';
import Settings from './views/Settings';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import UnderDevelopment from './views/UnderDevelopment';
import NotFound from './views/NotFound';
import Homepageview from 'views/Homepage/Homepageview';
import Artview from 'views/Courselists/Art/Artview';
import Businessview from 'views/Courselists/Business/Businessview';
import Computerscienceview from 'views/Courselists/ComputerScience/ComputerScienceview';
import Datascienceview from 'views/Courselists/DataScience/Datascienceview';
import Healthview from 'views/Courselists/Health/Healthview';
import Languageview from 'views/Courselists/Language/Languageview';
import Malview from 'views/Courselists/MathAndLogic/Malview';
import Coursedetailsview from 'views/CourseDetails/Coursedetailsview';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/homepage" />
        <Route component={Homepageview} exact path="/homepage" />
        <Route component={Artview} exact path="/course/3000000001" />
        <Route component={Businessview} exact path="/course/3000000002" />
        <Route
          component={Computerscienceview}
          exact
          path="/course/3000000003"
        />
        <Route component={Datascienceview} exact path="/course/3000000004" />
        <Route component={Healthview} exact path="/course/3000000005" />
        <Route component={Languageview} exact path="/course/3000000006" />
        <Route component={Malview} exact path="/course/3000000007" />
        <Route component={Coursedetailsview} exact path="/course-detail" />
        <Route component={Dashboard} exact path="/dashboard" />
        <Route component={UserList} exact path="/users" />
        <Route component={ProductList} exact path="/products" />
        <Route component={Typography} exact path="/typography" />
        <Route component={Icons} exact path="/icons" />
        <Route component={Account} exact path="/account" />
        <Route component={Settings} exact path="/settings" />
        <Route component={SignUp} exact path="/sign-up" />
        <Route component={SignIn} exact path="/sign-in" />
        <Route component={UnderDevelopment} exact path="/under-development" />
        <Route component={NotFound} exact path="/not-found" />
        <Route component={Account} exact path="/account-profile" />
        <Redirect to="/not-found" />
      </Switch>
    );
  }
}
