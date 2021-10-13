import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import StylistSignupFormContainer from './session/stylist_sign_form_container';
import StylistLoginFormContainer from './session/stylist_login_form_container';
import SignupButtons from './session/sign_up_button';
import LoginButtons from './session/log_in_buttons';
import Footer from '../components/footer/footer';

const App = () => (
  <div>
    <NavBarContainer />
    <div className = "body">
    <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path='/login' component={LoginButtons}/>
        <AuthRoute exact path="/users/login" component={LoginFormContainer} />
        <AuthRoute exact path='/stylists/login' component={StylistLoginFormContainer}/>
        <AuthRoute exact path="/signup" component={SignupButtons}/>
        <AuthRoute exact path="/users/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/stylists/signup" component={StylistSignupFormContainer} />
    </Switch>
    </div>
    <Footer />
  </div>
);

export default App;