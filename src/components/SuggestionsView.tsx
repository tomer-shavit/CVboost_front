import { GptApiResponse } from "@/types/api_calls";

import OldLine from "./OldLine";
import NewLine from "./NewLine";
import { HiOutlineSparkles } from "react-icons/hi";
import SubCard from "./SubCard";
import Card from "./Card";

const SuggestionsView: React.FC<{ data: GptApiResponse }> = ({ data }) => {
  return (
    <Card>
      <h5 className="mb-8 flex items-center text-3xl font-extrabold leading-tight text-neutral-100">
        <span className="inline-block mr-2 mt-1">
          <HiOutlineSparkles />{" "}
        </span>
        Suggestions:
      </h5>
      {data.edited_lines.map((line, index) => {
        return (
          <SubCard last={index === data.edited_lines.length - 1} key={index}>
            <OldLine text={line.old_line}></OldLine>
            <NewLine text={line.new_line}></NewLine>
          </SubCard>
        );
      })}
    </Card>
  );
};

export default SuggestionsView;
