import { GptApiResponse } from "@/types/api_calls";

import OldLine from "./OldLine";
import NewLine from "./NewLine";
import { HiOutlineSparkles } from "react-icons/hi";

const SuggestionsView: React.FC<{ data: GptApiResponse }> = ({ data }) => {
  return (
    <div className="p-8 flex flex-col justify-center h-[60vh] ">
      <div className="block rounded-lg dark:bg-slate-700 p-4 h-max overflow-y-auto  scrollbar-thin scroll scrollbar-thumb-rounded scrollbar-thumb-slate-800 ">
        <div className="p-4">
          <h5 className="mb-4 flex items-center text-3xl font-extrabold leading-tight text-neutral-100">
            <span className="inline-block mr-2 mt-1">
              <HiOutlineSparkles />{" "}
            </span>
            Suggestions:
          </h5>
          {data.edited_lines.map((line, index) => {
            return (
              <div
                className="block rounded-lg m-6 mt-8 mb-0 dark:bg-slate-600 p-6"
                key={index}
              >
                <OldLine text={line.old_line}></OldLine>
                <NewLine text={line.new_line}></NewLine>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SuggestionsView;
