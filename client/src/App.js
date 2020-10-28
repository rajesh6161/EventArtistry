import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/profile/Profile";

import Alert from "./components/layout/Alert";
import CreateProfile from "./components/profile-forms/CreateProfile";
import PrivateRoute from "./components/routing/PrivateRoute";
import Landing from "./components/layout/Landing";
import Profiles from "./components/profiles/Profiles";
import Footer from "./components/layout/Footer";
import Navb from "./components/layout/Navb";
import EditProfile from "./components/profile-forms/EditProfile";


// Redux
import { Provider } from "react-redux";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
import store from "./store";
import UploadAvatar from "./components/profile-forms/UploadAvatar";


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <div className="container-fluid" id="main">
        
        
            <Navb />
            <ToastContainer />
            <Alert />

            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/profiles" component={Profiles} />

            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute
              exact
              path="/create-profile"
              component={CreateProfile}
            />
            <PrivateRoute
              exact
              path="/edit-profile"
              component={EditProfile}
            />
            <PrivateRoute
              exact
              path="/profile-photo"
              component={UploadAvatar}
            />
            
            <div className="foo">
            <Footer />
            </div>
        
          </div>
          
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
