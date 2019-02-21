import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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
      userId: user.id,
      userPseudo: user.pseudo,
      token: user.token
    });

    Cookies.set("userId", user.id);
    Cookies.set("userPseudo", user.pseudo);
    Cookies.set("token", user.token);
  };

  getUser = () => {
    return {
      token: this.state.token,
      pseudo: this.state.userPseudo,
      id: this.state.userId
    };
  };

  renderHead = () => {
    if (this.state.token) {
      return (
        <>
          <div style={{ height: "55px", backgroundColor: "#F5692A" }}>
            <div
              style={{
                width: "82%",
                margin: "auto",
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <span
                style={{
                  display: "flex",
                  height: "55px"
                }}
              >
                <Link
                  to="/"
                  style={{
                    color: "white",
                    fontSize: "30px",
                    marginTop: "10px",
                    marginRight: "30px"
                  }}
                >
                  leboncoin
                </Link>
                <Link
                  to="/direct/publish"
                  style={{
                    color: "white",
                    fontSize: "13px",
                    marginTop: "20px",
                    marginRight: "20px"
                  }}
                >
                  DÉPOSER UNE ANNONCE
                </Link>
                <h2
                  style={{
                    color: "white",
                    fontSize: "13px",
                    marginTop: "20px"
                  }}
                >
                  OFFRES
                </h2>
              </span>
              <span>
                <span
                  style={{
                    color: "white",
                    fontSize: "13px",
                    marginBottom: "2%",
                    borderRight: "1px white solid"
                  }}
                >
                  {this.state.userPseudo}
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "13px",
                    borderRight: "1px white solid"
                  }}
                  onClick={() => {
                    Cookies.remove("userId");
                    Cookies.remove("userPseudo");
                    Cookies.remove("token");

                    this.setState({
                      userId: null,
                      userPseudo: null,
                      token: null
                    });
                  }}
                >
                  Se deconnecter
                </span>
              </span>
            </div>
          </div>
        </>
      );
    } else {
      return <Header />;
    }
  };

  render() {
    return (
      <Router>
        <>
          <div>{this.renderHead()}</div>
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
                return <Offer {...props} />;
              }}
            />
            <Route
              path="/direct/sign_up"
              render={props => {
                return <SignUp setUser={this.setUser} {...props} />;
              }}
            />
            <Route
              path="/direct/log_in"
              render={props => {
                return <LogIn setUser={this.setUser} {...props} />;
              }}
            />
            <Route
              path="/direct/publish"
              render={props => {
                return <Publish {...props} />;
              }}
            />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
