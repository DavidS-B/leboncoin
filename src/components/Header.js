import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div style={{ height: "55px", backgroundColor: "#F5692A" }}>
        <div
          style={{
            display: "flex",
            width: "82%",
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
            OFFRES
          </h2>
          <Link
            to="/direct/sign_up"
            style={{
              color: "white",
              fontSize: "13px",
              marginTop: "20px",
              marginLeft: "440px"
            }}
          >
            Créer un compte
          </Link>
          <Link
            to="/direct/log_in"
            style={{
              color: "white",
              fontSize: "13px",
              marginTop: "20px",
              marginLeft: "20px"
            }}
          >
            Se connecter
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
