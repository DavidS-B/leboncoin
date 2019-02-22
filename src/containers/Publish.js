import React, { Component } from "react";
import ReactFileReader from "react-file-reader";
// const resizebase64 = require("resize-base64");
// import LogIn from "./LogIn";

export class Publish extends Component {
  state = {
    files: []
  };

  handleFiles = files => {
    const newFiles = [...this.state.files, ...files.base64];
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
                multipleFiles={true} // `false si une seule image`
                handleFiles={this.handleFiles}
              >
                <button
                  style={{
                    border: "2px #CCCCCC dotted",
                    borderRadius: "4px",
                    backgroundColor: "#F2F2F2",
                    width: "170px",
                    height: "150px"
                  }}
                >
                  <img src={filesArray[0]} alt="img1" />
                  {/* var  img = resizebase64(base64, maxWidth, maxHeight);  */}
                </button>
              </ReactFileReader>
            </div>
            <div>
              <ReactFileReader
                style={{ width: "170px", height: "150px" }}
                fileTypes={[".png", ".jpg"]}
                base64={true}
                multipleFiles={true} // `false si une seule image`
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
                />
              </ReactFileReader>

              {filesArray[1]}
            </div>
            <div style={{ marginRight: "53%" }}>
              <ReactFileReader
                fileTypes={[".png", ".jpg"]}
                base64={true}
                multipleFiles={true} // `false si une seule image`
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
                />
              </ReactFileReader>

              {filesArray[2]}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Publish;
