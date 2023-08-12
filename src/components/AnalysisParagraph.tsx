const AnalysisParagraph: React.FC<{ text: string }> = ({ text }) => {
  return (
    <p className="mb-6 text-center md:text-left text-neutral-600 dark:text-neutral-200 ">
      {text}
    </p>
  );
};

export default AnalysisParagraph;
