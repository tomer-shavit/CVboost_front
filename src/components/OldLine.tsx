const OldLine: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="mb-4 ">
      <p className="text-white text-lg font-semibold">Instead of: </p>
      <p className=" text-base text-red-200 ">{'"' + text + '"'}</p>
    </div>
  );
};

export default OldLine;
