import React, { Component } from "react";
import ReactFileReader from "react-file-reader";
import axios from "axios";

export class Publish extends Component {
  state = {
    files: [],
    title: "",
    description: "",
    price: ""
  };

  handleSubmit = async e => {
    e.preventDefault();
    const token = this.props.getUser().token;
    const response = await axios.post(
      "https://leboncoin-apidsb.herokuapp.com/api/offer/publish",
      {
        files: this.state.files,
        title: this.state.title,
        description: this.state.description,
        price: Number(this.state.price)
      },
      {
        headers: {
          authorization: "Bearer " + token
        }
      }
    );
    console.log(response.data);
    if (response.data._id) {
      this.props.history.push("/");
    } else {
      alert("An error occurred");
    }
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleFiles = files => {
    const tab = [];
    tab.push(files.base64);
    const newFiles = [...this.state.files, ...tab];
    this.setState({
      files: newFiles
    });
  };

  render() {
    const filesArray = [];
    for (let i = 0; i < this.state.files.length; i++) {
      filesArray.push(
        <img
          key={i}
          onClick={() => {
            // En cliquant sur l'image, le fichier sera supprimé
            const newFiles = [...this.state.files];
            newFiles.splice(i, 1);
            this.setState({ files: newFiles });
          }}
          src={this.state.files[i]}
          alt="Annonce"
          style={{ borderRadius: "4px", width: "170px", height: "150px" }}
        />
      );
    }
    return (
      <div style={{ width: "82%", margin: "auto" }}>
        <h1
          style={{
            color: "#989898",
            borderBottom: "1px #989898 solid",
            marginTop: "20px",
            paddingBottom: "10px",
            fontSize: "18px",
            lineHeight: "27px",
            fontWeight: "bold"
          }}
        >
          Déposer une annonce
        </h1>
        <div style={{ border: "1px #989898 solid", marginTop: "40px" }}>
          <h2
            style={{
              color: "white",
              backgroundColor: "#666666",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "10px"
            }}
          >
            Votre annonce
          </h2>
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
              Titre de l'annonce <br />
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Texte de l'annonce <br />
              <input
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Prix <br />
              <input
                type="text"
                name="price"
                value={this.state.price}
                onChange={this.handleChange}
              />
            </label>{" "}
            <p
              style={{
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingLeft: "10px"
              }}
            >
              Photos : Une annonce avec photo est 7 fois plus consultée qu'une
              annonce sans photo
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <div style={{ marginLeft: "10px", marginBottom: "10px" }}>
                <ReactFileReader
                  fileTypes={[".png", ".jpg"]}
                  base64={true}
                  multipleFiles={false} // `false si une seule image`
                  handleFiles={this.handleFiles}
                >
                  <div
                    style={{
                      border: "2px #CCCCCC dotted",
                      borderRadius: "4px",
                      backgroundColor: "#F2F2F2",
                      width: "170px",
                      height: "150px"
                    }}
                  >
                    {filesArray[0]}
                  </div>
                </ReactFileReader>
              </div>
              <div>
                <ReactFileReader
                  style={{ width: "170px", height: "150px" }}
                  fileTypes={[".png", ".jpg"]}
                  base64={true}
                  multipleFiles={false} // `false si une seule image`
                  handleFiles={this.handleFiles}
                >
                  <div
                    style={{
                      border: "2px #CCCCCC dotted",
                      borderRadius: "4px",
                      backgroundColor: "#F2F2F2",
                      width: "170px",
                      height: "150px"
                    }}
                  >
                    {filesArray[1]}
                  </div>
                </ReactFileReader>
              </div>
              <div style={{ marginRight: "53%" }}>
                <ReactFileReader
                  fileTypes={[".png", ".jpg"]}
                  base64={true}
                  multipleFiles={false} // `false si une seule image`
                  handleFiles={this.handleFiles}
                >
                  <div
                    style={{
                      border: "2px #CCCCCC dotted",
                      borderRadius: "4px",
                      backgroundColor: "#F2F2F2",
                      width: "170px",
                      height: "150px"
                    }}
                  >
                    {filesArray[2]}
                  </div>
                </ReactFileReader>
              </div>
            </div>
            <input type="submit" value="Valider" />
          </form>
        </div>
      </div>
    );
  }
}

export default Publish;
