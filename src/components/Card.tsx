const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="rounded-lg bg-slate-700 p-6 overflow-y-auto scrollbar-thin scroll scrollbar-thumb-rounded scrollbar-thumb-slate-800 ">
        {children}
      </div>
    </div>
  );
};

export default Card;
