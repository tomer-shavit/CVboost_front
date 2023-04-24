import { TypingHeader } from "@/components/TypingHeader";
import { motion as m } from "framer-motion";
import Input from "@/components/Input";

const PreUpload: React.FC<{ setFile: (file: File) => void }> = ({
  setFile,
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };
  return (
    <div className="flex flex-col items-center">
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 0, y: "10%" }}
        className="mb-2"
      >
        <TypingHeader text="Boost your resume with AI." />
      </m.div>
      <m.div
        initial={{ opacity: 0, y: "15%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
        exit={{ opacity: 0, y: "15%" }}
      >
        <p className="text-gray-200 text-lg mb-10 ">
          Upload your resume now and receive a detailed analysis on it,
          supporting only English resumes in PDF format
        </p>
      </m.div>
      <m.div
        initial={{ opacity: 0, y: "15%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut", delay: 0.25 }}
        exit={{ opacity: 0, y: "15%" }}
      >
        <Input type="file" onChange={handleFileChange} />
      </m.div>
    </div>
  );
};
export default PreUpload;
