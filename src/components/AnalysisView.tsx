const AnalysisView: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return <div className="p-6 flex flex-col justify-center">{children}</div>;
};

export default AnalysisView;
