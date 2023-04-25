import { GptApiResponse } from "@/types/api_calls";
import { useEffect, useState } from "react";
import AnalysisParagraph from "./AnalysisParagraph";

const SummaryView: React.FC<{ data: GptApiResponse }> = ({ data }) => {
  const [score, setScore] = useState<number>();

  useEffect(() => {
    const totalScore =
      (data.score.clarity +
        data.score.relevance +
        data.score.achievements +
        data.score.keywords) /
      Object.keys(data.score).length;
    setScore(totalScore);
  }, [data]);
  return (
    <div className="p-8 pb-4 flex flex-col justify-center">
      <div className="block rounded-lg dark:bg-slate-700 p-4 h-max overflow-y-auto scrollbar-thin scroll scrollbar-thumb-rounded scrollbar-thumb-slate-800 ">
        <div className="p-4 pb-0">
          <h5 className="mb-4 text-3xl font-extrabold leading-tight text-neutral-100">
            Total Score: <span className="text-green-400">{score}</span> / 100
          </h5>
          <AnalysisParagraph text={data.feedback}></AnalysisParagraph>
        </div>
      </div>
    </div>
  );
};

export default SummaryView;
