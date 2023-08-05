import PDFViewer from "@/components/PDFViewer";
import AnalysisView from "@/components/AnalysisView";
import { motion as m } from "framer-motion";
import { GptApiResponse } from "@/types/api_calls";
import SummaryView from "./SummaryView";
import SuggestionsView from "./SuggestionsView";

const PostUpload: React.FC<{ file: File; data: GptApiResponse }> = ({
  file,
  data,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly ">
      <div className="w-full md:w-1/2 md:mb-0 md:flex-col justify-between md:mr-2">
        <m.div
          initial={{ opacity: 0, y: "5%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          exit={{ opacity: 0, y: "5%" }}
        >
          <SummaryView data={data}></SummaryView>
        </m.div>
        <m.div
          initial={{ opacity: 0, y: "5%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
          exit={{ opacity: 0, y: "5%" }}
        >
          <SuggestionsView data={data}></SuggestionsView>
        </m.div>
      </div>
      <div className="w-full md:w-1/2 md:flex md:justify-center">
        <m.div
          initial={{ opacity: 0, y: "5%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          exit={{ opacity: 0, y: "5%" }}
        >
          <AnalysisView data={data}></AnalysisView>
        </m.div>
      </div>
    </div>
  );
};

export default PostUpload;
