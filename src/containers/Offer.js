import React, { Component } from "react";
import axios from "axios";

export class Offer extends Component {
  state = {
    offers: [],
    isLoading: true
  };

  renderOffer = () => {
    if (this.state.isLoading === true) {
      return <p>Loading ...</p>;
    } else {
      for (let i = 0; i < this.state.offers.length; i++) {
        if (this.state.offers[i]._id === this.props.match.params.id) {
          console.log(this.state.offers[i]);
          return (
            <div>
              {this.state.offers[i].pictures.length > 0 && (
                <img
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "40px",
                    width: "400px",
                    height: "400px",
                    border: "1px black solid"
                  }}
                  src={this.state.offers[i].pictures[0].secure_url}
                  alt="offerImg"
                />
              )}

              <div
                style={{
                  backgroundColor: "white",
                  height: "100px",
                  border: "1px black solid"
                }}
              >
                <h1
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    paddingTop: "25px",
                    paddingLeft: "25px"
                  }}
                >
                  {this.state.offers[i].title}
                </h1>
                <h2
                  style={{
                    fontSize: "20px",
                    color: "#F5692A",
                    paddingTop: "10px",
                    paddingLeft: "25px"
                  }}
                >
                  {this.state.offers[i].price} €
                </h2>
              </div>
              <div
                style={{
                  borderTop: "1px #CAD0D8 solid",
                  borderBottom: "1px #CAD0D8 solid",
                  marginTop: "60px"
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginBottom: "25px",
                    marginTop: "25px"
                  }}
                >
                  Description
                </h3>
                <p
                  style={{
                    marginBottom: "25px"
                  }}
                >
                  {this.state.offers[i].description}
                </p>
              </div>
              <div
                style={{
                  borderTop: "1px #CAD0D8 solid",
                  borderBottom: "1px #CAD0D8 solid",
                  marginTop: "60px",
                  marginBottom: "60px"
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginBottom: "25px",
                    marginTop: "25px"
                  }}
                >
                  Contact{" "}
                  <span style={{ color: "#4083D7" }}>
                    {this.state.offers[i].creator.account.pseudo}
                  </span>
                </h3>
                <p
                  style={{
                    marginBottom: "25px"
                  }}
                >
                  {this.state.offers[i].creator.account.phone}
                </p>
              </div>
            </div>
          );
        }
      }
    }
  };

  render() {
    return (
      <div style={{ width: "82%", margin: "auto", marginTop: "30px" }}>
        {this.renderOffer()}
      </div>
    );
  }

  async componentDidMount() {
    const response = await axios.get(
      "https://leboncoin-apidsb.herokuapp.com/api/offer"
    );
    this.setState({
      offers: response.data,
      isLoading: false
    });
  }
}

export default Offer;
