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
      "https://leboncoin-apidsb.herokuapp.com/api/user/sign_up",
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
          width: "82%",
          margin: "auto",
          marginTop: "30px",
          display: "flex",
          backgroundColor: "white"
        }}
      >
        <div
          style={{
            width: "50%",
            padding: "2%",
            paddingRight: "2%",
            paddingLeft: "4%"
          }}
        >
          <h1
            style={{
              fontWeight: "bold",
              marginBottom: "45px",
              fontSize: "20px"
            }}
          >
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
              marginTop: "30px"
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
              marginTop: "30px"
            }}
          >
            Visibilité
          </h2>
          <p>
            Suivez les statistiques de vos annonces (nombre de fois où votre
            annonce a été vue, nombre de contacts reçus).
          </p>
        </div>
        <div style={{ width: "50%", padding: "2%", paddingRight: "4%" }}>
          <h1
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "30px",
              paddingBottom: "15px",
              borderBottom: "2px #F5692A solid"
            }}
          >
            Créez un compte
          </h1>
          <form
            style={{
              display: "flex",
              flexDirection: "column"
            }}
            onSubmit={this.handleSubmit}
          >
            <label style={{ fontWeight: "bold" }}>
              Pseudo <br />
              <input
                style={{
                  width: "100%",
                  height: "30px",
                  border: "1px #989898 solid",
                  borderRadius: "3px",
                  marginTop: "5px",
                  marginBottom: "10px"
                }}
                type="text"
                name="pseudo"
                value={this.state.pseudo}
                onChange={this.handleChange}
              />
            </label>
            <label style={{ fontWeight: "bold" }}>
              Adresse email <br />
              <input
                style={{
                  width: "100%",
                  height: "30px",
                  border: "1px #989898 solid",
                  borderRadius: "3px",
                  marginTop: "5px",
                  marginBottom: "10px"
                }}
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label style={{ width: "100%", fontWeight: "bold" }}>
                Mot de passe <br />
                <input
                  type="password"
                  name="password"
                  style={{
                    width: "95%",
                    height: "30px",
                    border: "1px #989898 solid",
                    borderRadius: "3px",
                    marginTop: "5px",
                    marginBottom: "10px"
                  }}
                  value={this.state.pwd}
                  onChange={this.handleChange}
                />
              </label>
              <label style={{ width: "95%", fontWeight: "bold" }}>
                Confirmer le mot de passe <br />
                <input
                  type="password"
                  name="checkPwd"
                  style={{
                    width: "100%",
                    height: "30px",
                    border: "1px #989898 solid",
                    borderRadius: "3px",
                    marginTop: "5px",
                    marginBottom: "20px"
                  }}
                  value={this.state.checkPwd}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <input
              style={{
                width: "97.9%",
                height: "30px",
                boxSizing: "content-box",
                backgroundColor: "#4083D7",
                borderRadius: "3px",
                color: "white",
                fontSize: "14px"
              }}
              type="submit"
              value=" Créer mon compte personnel"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
