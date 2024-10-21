const Icon = ({ children, name }) => {
  return (
    <div className="flex flex-col w-fit">
      <div className="flex flex-col items-center bg-slate-50 border border-slate-200 drop-shadow- w-fit p-3 rounded-lg">
        <div className="text-[60pt]">{children}</div>
      </div>
      <p className="text-center font-bold pt-2">{name}</p>
    </div>
  );
};

export default Icon;
