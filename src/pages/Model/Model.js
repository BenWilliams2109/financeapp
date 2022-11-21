import React, { useState } from "react";
import "./Model.css";
import { Amplify, Storage } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "../../aws-exports";
import awsExports from "../../aws-exports";

function Model() {
  Storage.list("") // for listing ALL files without prefix, pass '' instead
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

  return (
    <div>
      <h1>This is the Model page</h1>
    </div>
  );
}

export default Model;
