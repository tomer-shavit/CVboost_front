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
    <div className="flex  ml-10 flex-row justify-evenly items-center">
      <div className="w-1/2 flex-col justify-between">
        <SummaryView data={data}></SummaryView>
        <SuggestionsView data={data}></SuggestionsView>
      </div>
      <div className="w-1/2 flex flex-row justify-center">
        <AnalysisView data={data}></AnalysisView>
      </div>
    </div>
  );
};

export default PostUpload;
