const ProgressBar: React.FC<{ color: string; percentage: number }> = ({
  percentage,
  color,
}) => {
  return (
    <div className="w-full mb-8 h-2 bg-gray-500 rounded-full">
      <div
        className={`h-full text-center text-xs text-white bg-${color}-00 rounded-full `}
        style={{ width: percentage + "%" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
