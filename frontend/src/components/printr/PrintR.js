import React, { useRef } from "react";
import {Button} from '@material-ui/core';
import ReactToPrint from "react-to-print";

const PrintR = ({handleFileUpload, handleFileSubmit}) => {

  return (
    <form onSubmit={(e) => handleFileSubmit(e)}>
      <h1>File Upload</h1>
      <input type="file" onChange={(e) => handleFileUpload(e)}/>
      <button type="submit">Upload</button>
    </form>
  );
}

export default PrintR;
