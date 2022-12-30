import "./Docs.css";
import React, { useState } from "react";
import { Amplify, Storage } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import config from "../../aws-exports";
import Dropdown from "../../components/Dropdown";
import { ComponentPropsToStylePropsMap } from "@aws-amplify/ui-react";
import Table from "./table";
import { Loader } from "@aws-amplify/ui-react";

Amplify.configure(config);
Storage.configure({ track: true });

function Docs() {
  //This is all the code that deals with fetching from S3
  const [s3DownloadLinks, setS3DownloadLinks] = useState([0]);
  const [fetched, setFetched] = useState(true);

  async function listObjectsFromS3(Project) {
    setFetched(false);
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
    setFetched(true);
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
    listObjectsFromS3("R-for-Data-Science");
  };

  const handleMenuThree = () => {
    listObjectsFromS3("Academic-Work");
  };

  const handleMenuFour = () => {
    listObjectsFromS3("Other-Projects");
  };

  return (
    <div className="App">
      <div>
        <Dropdown
          className="dropdown"
          trigger={<button>Select Project</button>}
          menu={[
            <button onClick={handleMenuOne}>
              Algorithmic Trading for Python
            </button>,
            <button onClick={handleMenuTwo}>R for Data Science</button>,
            <button onClick={handleMenuThree}>Academic Work</button>,
            <button onClick={handleMenuFour}>Other Projects</button>,
          ]}
        />

        {!fetched && <Loader className="my-loader" variation="linear" />}

        <Table
          className="contents-table"
          data={s3DownloadLinks}
          col_labels={[
            "Doc Name",
            "Doc Type",
            "Last Modified",
            "Doc Size",
            "Open",
          ]}
        />
      </div>
    </div>
  );
}

export default Docs;
