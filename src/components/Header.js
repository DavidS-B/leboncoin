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

          {this.props.check.token && (
            <>
              <Link
                to="/api/user/publish"
                style={{
                  color: "white",
                  fontSize: "13px",
                  marginTop: "20px",
                  marginRight: "20px"
                }}
              >
                DÉPOSER UNE ANNONCE
              </Link>{" "}
              <Link
                to="/api/user/:id"
                style={{
                  color: "white",
                  fontSize: "13px",
                  marginTop: "20px"
                }}
              >
                {this.props.check.userPseudo}
              </Link>{" "}
              <span
                style={{
                  color: "white",
                  fontSize: "13px",
                  marginTop: "20px",
                  marginLeft: "20px"
                }}
                onClick={() => {
                  this.props.handleClick();
                }}
              >
                Se deconnecter
              </span>
            </>
          )}
          {this.props.check.token === null && (
            <>
              <Link
                to="/api/user/sign_up"
                style={{
                  color: "white",
                  fontSize: "13px",
                  marginTop: "20px"
                }}
              >
                Créer un compte
              </Link>
              <Link
                to="/api/user/log_in"
                style={{
                  color: "white",
                  fontSize: "13px",
                  marginTop: "20px",
                  marginLeft: "20px"
                }}
              >
                Se connecter
              </Link>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
