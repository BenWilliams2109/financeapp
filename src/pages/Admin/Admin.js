import React from "react";
import "./Admin.css";
import { Amplify } from "aws-amplify";
import config from "../../aws-exports";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

Amplify.configure(config);

function App({ signOut }) {
  return (
    <div>
      <Button onClick={signOut}>Sign Out</Button>
    </div>
  );
}

export default withAuthenticator(App);
