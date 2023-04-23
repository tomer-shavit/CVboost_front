import { GptApiResponse } from "@/types/api_calls";
import { useEffect, useState } from "react";
import AnalysisSubTitle from "./AnalysisSubTitle";
import AnalysisParagraph from "./AnalysisParagraph";

const AnalysisView: React.FC<{ data: GptApiResponse }> = ({ data }) => {
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
    <div className="p-10 flex flex-col justify-center w-5/6 h-screen">
      <div className="block rounded-lg dark:bg-slate-700 p-4 h-max overflow-y-auto scrollbar-thin scroll scrollbar-thumb-rounded scrollbar-thumb-slate-800">
        <div className="p-6">
          <h5 className="mb-4 text-3xl font-medium leading-tight text-neutral-200">
            Total Score: <span className="text-green-400">{score}</span> / 100
          </h5>
          <AnalysisSubTitle title="Clarity"></AnalysisSubTitle>
          <AnalysisParagraph text={data.clarity}></AnalysisParagraph>
          <AnalysisSubTitle title="Relevance"></AnalysisSubTitle>
          <AnalysisParagraph text={data.relevance}></AnalysisParagraph>
          <AnalysisSubTitle title="Achievments"></AnalysisSubTitle>
          <AnalysisParagraph text={data.achievements}></AnalysisParagraph>
          <AnalysisSubTitle title="Keywords"></AnalysisSubTitle>
          <AnalysisParagraph text={data.keywords}></AnalysisParagraph>
          <AnalysisParagraph text={data.feedback}></AnalysisParagraph>
        </div>
      </div>
    </div>
  );
};

export default AnalysisView;
