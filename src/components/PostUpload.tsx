import PDFViewer from "@/components/PDFViewer";
import AnalysisView from "@/components/AnalysisView";
import { motion as m } from "framer-motion";
import { GptApiResponse } from "@/types/api_calls";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

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
      <div className="w-1/2 ">
        <AnalysisView>
          <m.div
            initial={{ opacity: 0, y: "5%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            exit={{ opacity: 0, y: "5%" }}
          >
            <p className="font-bold text-4xl text-white mb-6">
              Your Score is{" "}
              <span className="text-green-400">{data?.score}</span>
              /100
            </p>
          </m.div>
          <m.div
            initial={{ opacity: 0, y: "5%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            exit={{ opacity: 0, y: "5%" }}
          >
            <p className="text-white text-lg max-w-2xl mb-8">
              {data?.feedback}
            </p>
          </m.div>
          <m.ul className="list-disc">
            {data?.bullet_points.map((bullet, i) => (
              <m.li
                initial={{ opacity: 0, y: "20%" }}
                animate={{ opacity: 1, y: "0%" }}
                transition={{ duration: 1, delay: i * 0.2 }}
                key={i}
                className="text-white text-lg max-w-2xl m-4 flex items-start"
              >
                <span className="text-green-400 text-xl mr-2 font-bold">-</span>{" "}
                {bullet}
              </m.li>
            ))}
          </m.ul>
        </AnalysisView>
      </div>
    </div>
  );
};

export default PostUpload;
