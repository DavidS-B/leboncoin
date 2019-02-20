import React, { Component } from "react";
import axios from "axios";

export class SignUp extends Component {
  state = {
    pseudo: "",
    email: "",
    password: "",
    checkPassword: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    const response = await axios.post(
      "http://localhost:3000/api/user/sign_up",
      {
        pseudo: this.state.pseudo,
        email: this.state.email,
        password: this.state.password
      }
    );
    if (response.data.token) {
      this.props.history.push("/");
      console.log(response.data);

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
      <div
        style={{
          width: "985px",
          margin: "auto",
          marginTop: "30px",
          display: "flex",
          backgroundColor: "white"
        }}
      >
        <div style={{ width: "50%" }}>
          <h1 style={{ fontWeight: "bold", marginBottom: "30px" }}>
            Pourquoi créer un compte ?
          </h1>
          <h2 style={{ fontWeight: "bold", marginBottom: "10px" }}>
            Gagnez du temps
          </h2>
          <p>
            Publiez vos annonces rapidement, avec vos informations pré-remplies
            chaque fois que vous souhaitez déposer une nouvelle annonce.
          </p>
          <h2
            style={{
              fontWeight: "bold",
              marginBottom: "10px",
              marginTop: "15px"
            }}
          >
            Soyez les premiers informés
          </h2>
          <p>
            Créez des alertes Immo ou Emploi et ne manquez jamais l'annonce qui
            vous intéresse.
          </p>
          <h2
            style={{
              fontWeight: "bold",
              marginBottom: "10px",
              marginTop: "15px"
            }}
          >
            Visibilité
          </h2>
          <p>
            Suivez les statistiques de vos annonces (nombre de fois où votre
            annonce a été vue, nombre de contacts reçus).
          </p>
        </div>
        <div style={{ width: "50%" }}>
          <h1
            style={{
              textAlign: "center",
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "15px",
              paddingBottom: "15px",
              borderBottom: "2px #F5692A solid"
            }}
          >
            Créez un compte
          </h1>
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
              Adresse email <br />
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
            <div style={{ display: "flex" }}>
              <label>
                Mot de passe <br />
                <input
                  style={{ width: "90%" }}
                  type="password"
                  name="password"
                  value={this.state.pwd}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Confirmer le mot de passe <br />
                <input
                  type="password"
                  name="checkPwd"
                  style={{ width: "90%" }}
                  value={this.state.checkPwd}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <input type="submit" value="Créer mon Compte Personnel" />
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
