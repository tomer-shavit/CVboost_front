import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface Props {
  file: File;
}

const PDFViewer: React.FC<Props> = ({ file }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScale(0.7);
      } else if (width < 1024) {
        setScale(0.7);
      } else {
        setScale(0.9);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <Document file={file}>
        <Page pageNumber={1} scale={scale} />
      </Document>
    </div>
  );
};

export default PDFViewer;
