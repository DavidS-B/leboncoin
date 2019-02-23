import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Home extends React.Component {
  state = {
    offers: [],
    isLoading: true
  };

  skip = () => {
    const count = (this.props.match.params.page_number - 1) * 25;
    return count;
  };

  renderOffers = () => {
    if (this.state.isLoading === true) {
      return <p>Loading ...</p>;
    } else {
      return (
        <ul style={{ listStyleType: "none" }}>
          {this.state.offers.map(offer => (
            <Link
              style={{ textDecoration: "none" }}
              to={"/offer/" + offer._id}
              key={offer._id}
            >
              <li
                style={{
                  height: "160px",
                  display: "flex",
                  alignItems: "center",
                  border: "1px #CECECE solid",
                  backgroundColor: "#FFFFFF"
                }}
                key={offer._id}
              >
                <img
                  style={{
                    borderRadius: "4px",
                    width: "170px",
                    height: "150px",
                    marginLeft: "5px"
                  }}
                  src={offer.pictures[0].secure_url}
                  alt="offerImg"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignSelf: "flex-start"
                  }}
                >
                  <p
                    style={{
                      color: "#6A8EB1",
                      marginBottom: "25px",
                      marginTop: "10px",
                      marginLeft: "10px"
                    }}
                  >
                    {offer.title}
                  </p>
                  <p style={{ color: "#F56A2A", marginLeft: "10px" }}>
                    {offer.price + "€"}
                  </p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      );
    }
  };

  render() {
    return (
      <div style={{ width: "82%", margin: "auto", marginTop: "30px" }}>
        {this.renderOffers()}
        <div
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            textAlign: "center"
          }}
        >
          ＜
          <Link
            style={{
              marginLeft: "5px",
              marginRight: "10px",
              textDecoration: "none",
              color: "#326699"
            }}
            to="/1"
          >
            1
          </Link>
          <Link
            style={{
              marginRight: "10px",
              textDecoration: "none",
              color: "#326699"
            }}
            to="/2"
          >
            2
          </Link>
          <Link
            style={{
              marginRight: "10px",
              textDecoration: "none",
              color: "#326699"
            }}
            to="/3"
          >
            3
          </Link>
          <Link
            style={{
              marginRight: "5px",
              textDecoration: "none",
              color: "#326699"
            }}
            to="/4"
          >
            4
          </Link>
          ＞
        </div>
      </div>
    );
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.props.match.params.page_number !== prevProps.match.params.page_number
    ) {
      const response = await axios.get(
        // "https://leboncoin-api.herokuapp.com/api/offer/with-count?skip=" +
        //   this.skip() +
        //   "&limit=25"
        "https://leboncoin-apidsb.herokuapp.com/api/offer"
      );

      this.setState({
        offers: response.data,
        isLoading: false
      });
    }
  }

  async componentDidMount() {
    const response = await axios.get(
      // "https://leboncoin-api.herokuapp.com/api/offer/with-count?skip=" +
      //   this.skip() +
      //   "&limit=25"
      "https://leboncoin-apidsb.herokuapp.com/api/offer"
    );
    this.setState({
      offers: response.data,
      isLoading: false
    });
  }
}

export default Home;
