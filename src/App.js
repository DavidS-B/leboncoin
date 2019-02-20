import React, { Component } from "react";
import ReactFileReader from "react-file-reader";
import Home from "./containers/Home";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./Reset.css";
import "./App.css";
import Offer from "./containers/Offer";
import SignUp from "./containers/SignUp";
import LogIn from "./containers/LogIn";
import Cookies from "js-cookie";

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
                display: "flex",
                width: "985px",
                margin: "auto"
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
              <h2
                style={{
                  color: "white",
                  fontSize: "13px",
                  marginTop: "20px",
                  marginRight: "20px"
                }}
              >
                DÉPOSER UNE ANNONCE
              </h2>
              <h2
                style={{ color: "white", fontSize: "13px", marginTop: "20px" }}
              >
                OFFRES
              </h2>
              <span
                style={{
                  color: "white",
                  fontSize: "13px",
                  marginTop: "20px",
                  marginLeft: "440px"
                }}
              >
                {this.state.userPseudo}
              </span>
              <span
                style={{
                  color: "white",
                  fontSize: "13px",
                  marginTop: "20px",
                  marginLeft: "auto"
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
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <Header />
        </>
      );
    }
  };

  render() {
    return (
      <Router>
        <>
          <div>{this.renderHead()}</div>
          <Switch>
            <Route
              path="/"
              exact={true}
              render={props => <Home {...props} />}
            />
            <Route
              path="/offer/:id"
              exact={true}
              render={props => <Offer {...props} />}
            />
            <Route
              path="/:page_number"
              exact={true}
              render={props => <Home {...props} />}
            />
            <Route
              path="/api/user/sign_up"
              exact={true}
              render={props => <SignUp setUser={this.setUser} {...props} />}
            />
            <Route
              path="/api/user/log_in"
              exact={true}
              render={props => <LogIn setUser={this.setUser} {...props} />}
            />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
