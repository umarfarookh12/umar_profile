type progessbar = {
  pNumber: string;
};
const Progess = (props: progessbar) => {
  const { pNumber } = props;
  return (
    <div className="w-full bg-gray-200 rounded-full font-sans">
      <div
        className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.4 leading-none rounded-full"
        style={{ width: `${pNumber}%` }}
      >
        {pNumber}%
      </div>
    </div>
  );
};

export default Progess;
