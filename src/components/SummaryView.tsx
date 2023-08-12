import { GptApiResponse } from "@/types/api_calls";
import { useEffect, useState } from "react";
import AnalysisParagraph from "./AnalysisParagraph";
import Card from "./Card";
import SubCard from "./SubCard";

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
    <Card>
      <div className="flex lg:flex-row flex-col">
        <h5 className="text-3xl lg:pr-2 font-extrabold leading-tight text-neutral-100">
          Total Score:
        </h5>
        <h5 className="mb-4 text-3xl font-extrabold leading-tight text-neutral-100">
          <span className="text-green-400">{score}</span> / 100
        </h5>
      </div>
      <SubCard last>
        <AnalysisParagraph text={data.feedback}></AnalysisParagraph>
      </SubCard>
    </Card>
  );
};
export default SummaryView;
