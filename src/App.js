import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";
import Home from "./containers/Home";
import Header from "./components/Header";
import Offer from "./containers/Offer";
import SignUp from "./containers/SignUp";
import LogIn from "./containers/LogIn";
import Publish from "./containers/Publish";
import "./Reset.css";
import "./App.css";

class App extends Component {
  state = {
    userId: Cookies.get("userId") || null,
    userPseudo: Cookies.get("userPseudo") || null,
    token: Cookies.get("token") || null
  };

  setUser = user => {
    this.setState({
      userId: user._id,
      userPseudo: user.account.pseudo,
      token: user.token
    });

    Cookies.set("userId", user._id);
    Cookies.set("userPseudo", user.account.pseudo);
    Cookies.set("token", user.token);
  };

  getUser = () => {
    return {
      token: this.state.token,
      pseudo: this.state.userPseudo,
      id: this.state.userId
    };
  };

  handleClick = () => {
    Cookies.remove("userId");
    Cookies.remove("userPseudo");
    Cookies.remove("token");

    this.setState({
      userId: null,
      userPseudo: null,
      token: null
    });
  };

  render() {
    return (
      <Router>
        <>
          <Header check={this.state} handleClick={this.handleClick} />
          <Switch>
            <Route
              exact
              path="/"
              render={props => {
                return <Home {...props} />;
              }}
            />
            <Route
              exact
              path="/:page_number"
              render={props => {
                return <Home {...props} />;
              }}
            />
            <Route
              exact
              path="/offer/:id"
              render={props => {
                return <Offer getUser={this.getUser} {...props} />;
              }}
            />
            <Route
              path="/api/user/sign_up"
              render={props => {
                return <SignUp setUser={this.setUser} {...props} />;
              }}
            />
            <Route
              path="/api/user/log_in"
              render={props => {
                return <LogIn setUser={this.setUser} {...props} />;
              }}
            />
            <Route
              path="/api/user/publish"
              render={props => {
                return <Publish getUser={this.getUser} {...props} />;
              }}
            />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
