import "./Docs.css";
import React, { useState } from "react";
import { Amplify, Storage } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import config from "../../aws-exports";
import Dropdown from "../../components/Dropdown";
import { ComponentPropsToStylePropsMap } from "@aws-amplify/ui-react";
import Table from "./table";

Amplify.configure(config);
Storage.configure({ track: true });

function Docs() {
  //This is all the code that deals with fetching from S3
  const [s3DownloadLinks, setS3DownloadLinks] = useState([0]);

  async function listObjectsFromS3(Project) {
    setS3DownloadLinks((s3DownloadLinks) => []);

    const s3Objects = await Storage.list(String(Project) + "/", {
      level: "public",
    });
    console.log(s3Objects);
    s3Objects.results
      .filter((item) => item.size !== 0)
      .map(async (item) => {
        let downloadLink = await generateDownloadLinks(item.key);
        setS3DownloadLinks((s3DownloadLinks) => [
          ...s3DownloadLinks,
          [item.key, 0, item.lastModified, item.size, downloadLink],
        ]);
      });
  }

  async function generateDownloadLinks(fileKey) {
    const result = await Storage.get(fileKey, { download: true });
    return URL.createObjectURL(result.Body);
  }

  // These are all the menu option handlers
  const handleMenuOne = () => {
    listObjectsFromS3("Algo-Trading-Python");
  };

  const handleMenuTwo = () => {
    listObjectsFromS3("Other-Projects");
  };

  const handleMenuThree = () => {
    listObjectsFromS3("Academic-Work");
  };

  return (
    <div className="App">
      <div>
        <Dropdown
          trigger={<button>Select Project</button>}
          menu={[
            <button onClick={handleMenuOne}>
              Algorithmic Trading for Python
            </button>,
            <button onClick={handleMenuTwo}>Other Projects</button>,
            <button onClick={handleMenuThree}>Academic Work</button>,
          ]}
        />
        <Table
          data={s3DownloadLinks}
          col_labels={[
            "Doc Name",
            "Doc Type",
            "Last Modified",
            "Doc Size",
            "Open",
          ]}
        />
        <div></div>
      </div>
    </div>
  );
}

export default Docs;
