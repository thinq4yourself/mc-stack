import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Route containers & components are all WIP 8-8-18

// Templates
import TemplateBasic from '../components/TemplateBasic';
import TemplateSidebar from '../components/TemplateSidebar';

// Routes
import Home from '../components/Home';

import TodosContainer from '../../containers/Todos';
import TodosComponent from '../components/Todos';
import TodoViewComponent from '../components/Todo';

import SignUpContainer from '../../containers/SignUp';
import SignUpComponent from '../components/SignUp';

import LoginContainer from '../../containers/Login';
import LoginComponent from '../components/Login';

import ForgotPasswordContainer from '../../containers/ForgotPassword';
import ForgotPasswordComponent from '../components/ForgotPassword';

import UpdateProfileContainer from '../../containers/UpdateProfile';
import UpdateProfileComponent from '../components/UpdateProfile';

import Error from '../components/Error';

const Index = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => (
        <TemplateSidebar>
          <Home {...props} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/sign-up"
      render={props => (
        <TemplateBasic>
          <SignUpContainer {...props} Layout={SignUpComponent} />
        </TemplateBasic>
      )}
    />
    <Route
      path="/login"
      render={props => (
        <TemplateBasic>
          <LoginContainer {...props} Layout={LoginComponent} />
        </TemplateBasic>
      )}
    />
    <Route
      path="/forgot-password"
      render={props => (
        <TemplateBasic>
          <ForgotPasswordContainer {...props} Layout={ForgotPasswordComponent} />
        </TemplateBasic>
      )}
    />
    <Route
      path="/update-profile"
      render={props => (
        <TemplateSidebar>
          <UpdateProfileContainer {...props} Layout={UpdateProfileComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/todos"
      render={props => (
        <TemplateSidebar>
          <TodosContainer {...props} Layout={TodosComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/todos/:id"
      render={props => (
        <TemplateSidebar>
          <TodosContainer {...props} Layout={TodoViewComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      render={props => (
        <TemplateSidebar>
          <Error {...props} title="404" content="Sorry, the url you requested does not exist" />
        </TemplateSidebar>
      )}
    />
  </Switch>
);

export default Index;
