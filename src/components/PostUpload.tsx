import PDFViewer from "@/components/PDFViewer";
import AnalysisView from "@/components/AnalysisView";
import { motion as m } from "framer-motion";
import { GptApiResponse } from "@/types/api_calls";

const PostUpload: React.FC<{ file: File; data: GptApiResponse }> = ({
  file,
  data,
}) => {
  return (
    <div className="flex flex-row justify-space items-center">
      <div className="w-1/2">
        <m.div
          initial={{ opacity: 0, y: "5%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          exit={{ opacity: 0, y: "5%" }}
        >
          <PDFViewer file={file}></PDFViewer>
        </m.div>
      </div>
      <div className="w-1/2">
        <AnalysisView data={data}></AnalysisView>
      </div>
    </div>
  );
};

export default PostUpload;
