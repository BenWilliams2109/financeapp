import "./Docs.css";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
import { Amplify, Storage } from "aws-amplify";
import config from "../../aws-exports";
import Pdf from "./docs src/Market Movements with Machine Learning.pdf";

Amplify.configure(config);
Storage.configure({ track: true });

export default function PagePicker(pdf) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={Pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
