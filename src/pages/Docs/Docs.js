import "./Docs.css";
import React, { useState, useEffect } from "react";
import { Amplify, Storage } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "../../aws-exports";
import awsExports from "../../aws-exports";

Amplify.configure(config);
Storage.configure({ track: true });

function App() {
  const [s3DownloadLinks, setS3DownloadLinks] = useState([""]);

  async function listObjectsFromS3() {
    const s3Objects = await Storage.list("");
    console.log(s3Objects);
    s3Objects.results.map(async (item) => {
      let downloadLink = await generateDownloadLinks(item.key);
      setS3DownloadLinks((s3DownloadLinks) => [
        ...s3DownloadLinks,
        downloadLink,
      ]);
    });
  }

  async function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename || "download";
    return a;
  }

  async function generateDownloadLinks(fileKey) {
    const result = await Storage.get(fileKey, { download: true });
    console.log(result);
    return downloadBlob(result.Body, "filename");
  }

  useEffect(() => {
    listObjectsFromS3();
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      <p>List of files:</p>
      {s3DownloadLinks.map((item, index) => {
        return (
          <div key={index}>
            <a href={item} target="_blank" download="">
              Link {index}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default App;
