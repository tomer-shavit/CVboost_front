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
    <div className="flex h-full flex-col justify-center ">
      <div className="dark:bg-slate-700 h-full p-8 pb-4 overflow-y-auto scrollbar-thin scroll scrollbar-thumb-rounded scrollbar-thumb-slate-800 ">
        <div className="flex lg:flex-row flex-col">
          <h5 className="text-3xl lg:pr-2 font-extrabold leading-tight text-neutral-100">
            Total Score:
          </h5>
          <h5 className="mb-4 text-3xl font-extrabold leading-tight text-neutral-100">
            <span className="text-green-400">{score}</span> / 100
          </h5>
        </div>
        <AnalysisParagraph text={data.feedback}></AnalysisParagraph>
      </div>
    </div>
  );
};

export default SummaryView;
