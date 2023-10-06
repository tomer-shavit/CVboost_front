import AnalysisView from "@/components/AnalysisView";
import { motion as m } from "framer-motion";
import { GptApiResponse } from "@/types/api_calls";
import SummaryView from "./SummaryView";
import SuggestionsView from "./SuggestionsView";

const PostUpload: React.FC<{ data: GptApiResponse }> = ({ data }) => {
  return (
    <div className="pl-8 pr-8 pt-4 md:h-[91vh] grid grid-cols-1 md:grid-cols-2 md:grid-rows-6 gap-y-10 md:gap-y-8 md:gap-x-12">
      <m.div
        initial={{ opacity: 0, y: "5%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        exit={{ opacity: 0, y: "5%" }}
        className="col-start-1  md:row-start-1 md:row-end-3 overflowy-y-hidden rounded-lg"
      >
        <SummaryView data={data}></SummaryView>
      </m.div>
      <m.div
        initial={{ opacity: 0, y: "5%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        exit={{ opacity: 0, y: "5%" }}
        className="col-start-1 md:col-start-2 md:row-start-1 md:row-end-7 overflow-y-auto rounded-lg"
      >
        <AnalysisView data={data}></AnalysisView>
      </m.div>
      <m.div
        initial={{ opacity: 0, y: "5%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
        exit={{ opacity: 0, y: "5%" }}
        className="col-start-1 row-start-3 row-end-7 overflow-y-auto rounded-lg"
      >
        <SuggestionsView data={data}></SuggestionsView>
      </m.div>
      <div className="col-start-1 col-end-3 text-white mb-16 md:mb-6 text-lg text-center justify-center">
        <p>We want to hear your feedback! </p>
        <a
          href={process.env.NEXT_PUBLIC_FEEDBACK_FORM}
          target="_blank"
          className="text-green-400 text-lg font-bold"
        >
          Click Here
        </a>
      </div>
    </div>
  );
};

export default PostUpload;
