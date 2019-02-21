import React, { Component } from "react";
import axios from "axios";

export class LogIn extends Component {
  state = {
    pseudo: "",
    password: ""
  };

  handleSubmit = async event => {
    event.preventDefault();

    const response = await axios.post("http://localhost:3000/direct/log_in", {
      pseudo: this.state.pseudo,
      password: this.state.password
    });

    if (response.data.token) {
      this.props.history.push("/");
      this.props.setUser(response.data);
    } else {
      alert("An error occurred");
    }
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div style={{ width: "985px", margin: "auto", marginTop: "30px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Connexion</h1>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
          onSubmit={this.handleSubmit}
        >
          <label>
            Pseudo <br />
            <input
              type="text"
              name="pseudo"
              value={this.state.pseudo}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Mot de passe <br />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Se connecter" />
        </form>
      </div>
    );
  }
}

export default LogIn;
