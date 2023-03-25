import React from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface Props {
  file: File;
}

const PDFViewer: React.FC<Props> = ({ file }) => {
  return (
    <div className="flex justify-center">
      <Document file={file}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PDFViewer;
