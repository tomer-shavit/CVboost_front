import { BiTargetLock } from "react-icons/bi";
import { FaBullseye, FaTags } from "react-icons/fa";
import { MdStar } from "react-icons/md";

type IconMapType = {
  [key: string]: JSX.Element;
};

const iconMap: IconMapType = {
  Clarity: (
    <span className="inline-block mr-2 mt-1">
      <BiTargetLock color="#629BE2" />
    </span>
  ),
  Relevance: (
    <span className="inline-block mr-2 mt-1">
      <FaBullseye color="#50C980" />
    </span>
  ),
  Achievements: (
    <span className="inline-block mr-2">
      <MdStar color="#DDBA2B" />
    </span>
  ),
  Keywords: (
    <span className="inline-block mr-2 mt-2">
      <FaTags color="#CF78E1" />
    </span>
  ),
};

const AnalysisSubTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <h4 className="text-2xl flex justify-center md:justify-start items-center font-bold mb-2 text-neutral-100">
      {title}
      <span className="ml-2 mt-2">{iconMap[title]}</span>
    </h4>
  );
};

export default AnalysisSubTitle;
