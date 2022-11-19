import "./Docs.css";
import React, { useState, useEffect } from "react";
import { Amplify, Storage } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "../../aws-exports";
import awsExports from "../../aws-exports";

Amplify.configure(config);
Storage.configure({ track: true });

function App({ signOut, user }) {
  const [fileData, setFileData] = useState();
  const [fileStatus, setFileStatus] = useState(false);
  const [s3DownloadLinks, setS3DownloadLinks] = useState([]);

  const uploadFile = async () => {};

  async function listObjectsFromS3() {
    const s3Objects = await Storage.list("");
    s3Objects.map(async (item) => {
      console.log(30, item);
      let downloadLink = await generateDownloadLinks(item.key);
      setS3DownloadLinks((s3DownloadLinks) => [
        ...s3DownloadLinks,
        downloadLink,
      ]);
    });
  }

  async function generateDownloadLinks(fileKey) {
    const result = await Storage.get(fileKey, { download: true });
    return downloadBlob(result.Body, "filename");
  }

  async function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    return a;
  }

  useEffect(() => {
    listObjectsFromS3();
  }, []);

  return (
    <div className="App">
      <h1>Hello {user.name}</h1>
      <button onClick={signOut}>Sign out</button>

      <div>
        <input type="file" onChange={(e) => setFileData(e.target.files[0])} />
      </div>
      <div>
        <button onClick={uploadFile}>Upload file</button>
      </div>
      <div>{fileStatus ? "File uploaded Successfully" : ""}</div>

      {s3DownloadLinks.map((item, index) => {
        <div key={index}>
          <a href={item} target="_blank" download="">
            Link {index}
          </a>
        </div>;
      })}
    </div>
  );
}

export default withAuthenticator(App);
