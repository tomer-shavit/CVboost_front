const NewLine: React.FC<{ text: string }> = ({ text }) => {
  return (
    <>
      <p className="text-white text-lg font-semibold">Try: </p>
      <p className=" text-base text-green-200 ">{'"' + text + '"'}</p>
    </>
  );
};

export default NewLine;
