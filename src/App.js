import React, { Component } from "react";
import UploadFileService from "./services/UploadFileService";

export default class App extends Component {
  onFileChangeHandler = e => {
    const formData = new FormData();
    for (let i = 0; i < e.target.files.length; i++) {
      formData.append("file", e.target.files[i]);
    }
    UploadFileService.upload(formData).then(res => {
      console.log(res.data);
      alert("File uploaded successfully.");
    });
  };
  render() {
    return (
      <>
        <div className="align-content-center">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group files color">
                  <label>Upload Your File </label>
                  <input
                    type="file"
                    className="form-control"
                    name="file"
                    onChange={this.onFileChangeHandler}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
