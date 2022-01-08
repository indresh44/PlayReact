import React, { useState } from "react";
import axios from "axios";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [jsonData, setJsonData] = useState(null);

  // On file select (from the pop up)
  const onFileChange = (event) => {
    // Update the state
    // this.setState({ selectedFile: event.target.files[0] });
    setSelectedFile((oldState) => {
      return event.target.files[0];
    });
  };

  // On file upload (click the upload button)
  const onFileUpload = async () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("myFile", selectedFile, selectedFile.name);

    // Details of the uploaded file;
    console.log(selectedFile);
    // console.log(selectedFile.keys());

    // Request made to the backend api
    // Send formData object
    console.log(formData);
    const resp1 = await axios
      .post(
        "https://playreactmockapi.free.beeceptor.com/uploadFile",
        formData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            // Authorization: 'Bearer ' + token // if you use token
          },
        }
      )
      .catch((err) => {
        console.log(err);
      });
    console.log(resp1);
  };

  const FileData = () => {
    if (selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {selectedFile.name}</p>
          <p>File Type: {selectedFile.type}</p>
          <p>Last Modified: {selectedFile.lastModifiedDate.toDateString()}</p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  return (
    <div>
      <h1>GeeksforGeeks</h1>
      <h3>File Upload using React!</h3>
      <div>
        <input type="file" onChange={onFileChange} />
        <button onClick={onFileUpload}>Upload!</button>
      </div>
      {<FileData />}
      <div>{JSON.stringify(selectedFile, null, 2)}</div>
      {/* {selectedFile} */}
    </div>
  );
}

export default FileUpload;
