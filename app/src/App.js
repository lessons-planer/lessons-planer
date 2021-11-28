//react
import React, { useEffect } from 'react';

//css
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

//redux
import store from './store';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from './redux/actions/auth';

//router
import { Route, Switch } from 'react-router';

//components
//all styled components are in the same place now. Remember to add them to index.js in the directory src/components/styledComponents
//named imports
import { InactiveReplacement } from './containers/InactiveReplacement';
import { LectureAnalysis } from './containers/lectureAnalysis/LectureAnalysis';
import { LectureAnalysisDetail } from './containers//lectureAnalysis/LectureAnalysisDetail';
import { VolunteerAnalysis } from './containers/volunteerAnalysis/VolunteerAnalysis';
import { VolunteerAnalysisDetail } from './containers/volunteerAnalysis/VolunteerAnalysisDetail';
import { Whoops404 } from './containers/Whoops404';
//default imports
import Home from './containers/Home';
import LoginPortlet from './containers/LoginPortlet/LoginPortlet';
import UserMenu from './containers/menus/UserMenu';
import AdminMenu from './containers/menus/AdminMenu';
import LoginForm from './containers/forms/LoginForm/LoginForm';
import RegisterForm from './containers/forms/RegisterForm';
import PrivateRoute from './containers/PrivateRoute';
import ActivateAccount from './containers/ActivateAccount';
import ResetPassword from './containers/passwordReset/ResetPassword';
import ResetPasswordConfirm from './containers/passwordReset/ResetPasswordConfirm';
import SubmitReplacement from './containers/forms/SubmitReplacement';
import InitialPasswordReset from './containers/forms/InitialPasswordReset/InitialPasswordReset';
import TakenSubstitutions from './containers/substitutions/TakenSubstitutions';

function App({ isAuthenticated, checkAuthenticated, load_user }) {
  useEffect(() => {
    checkAuthenticated();
    load_user();
  });

  return (
    <>
      {isAuthenticated ? <LoginPortlet /> : null}
      <Switch>
        {/* USER PATHS */}
        <PrivateRoute exact path="/user_menu" component={UserMenu} />
        <PrivateRoute
          path="/inactive_replacement"
          component={InactiveReplacement}
        />
        <PrivateRoute
          exact
          path="/submit_replacement"
          component={SubmitReplacement}
        />
        <PrivateRoute
          exact
          path="/initialPasswordReset"
          component={InitialPasswordReset}
        />
        <PrivateRoute
          path="/taken_substitutions"
          component={TakenSubstitutions}
        />
        {/* <PrivateRoute 
          path="/fill_in_report"
          component={FillInReport}
        /> */}

        {/* ADMIN PATHS */}
        <PrivateRoute path="/admin_menu" component={AdminMenu} />
        <PrivateRoute path="/admin/register_form" component={RegisterForm} />
        {/* <PrivateRoute path="/admin/current_report" component={CurrentReport} /> */}

        <PrivateRoute
          path="/admin/lecture_analysis"
          exact
          component={LectureAnalysis}
        />
        <PrivateRoute
          path="/admin/lecture_analysis/:month"
          component={LectureAnalysisDetail}
        />
        <PrivateRoute
          path="/admin/volunteer_analysis"
          exact
          component={VolunteerAnalysis}
        />
        <PrivateRoute
          path="/admin/volunteer_analysis/:month"
          component={VolunteerAnalysisDetail}
        />
        {/* COMMON PATHS */}
        <Route exact path="/" component={Home} />
        <Route path="/login_form" component={LoginForm} />
        <Route path="/activate/:uid/:token" component={ActivateAccount} />
        <Route path="/reset_password" component={ResetPassword} />
        <Route
          path="/password/reset/confirm/:uid/:token"
          component={ResetPasswordConfirm}
        />
        <Route path="*" component={Whoops404} />
      </Switch>
      <div className="footer fixed-bottom text-center">© 2021 Web-Korki</div>
    </>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { checkAuthenticated, load_user })(App);
