import React, { ReactNode, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { MdUploadFile } from "react-icons/md";
import { motion as m } from "framer-motion";
const DropzoneWrapper: React.FC<{
  children: ReactNode;
  setFile: (file: File) => void;
}> = ({ children, setFile }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFile(acceptedFiles[0]);
    },
    [setFile]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    noClick: true,
  });

  return (
    <m.div
      initial={{ opacity: 0, y: "15%" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      exit={{ opacity: 0, y: "15%" }}
    >
      <div {...getRootProps()} className="relative h-full w-full">
        <input {...getInputProps()} />
        {children}
        {isDragActive && (
          <m.div className="absolute border-8 border-dashed border-green-300 rounded-md inset-0 m-8 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <MdUploadFile className="text-green-400 text-9xl z-20"></MdUploadFile>
            </div>
          </m.div>
        )}
      </div>
    </m.div>
  );
};

export default DropzoneWrapper;
