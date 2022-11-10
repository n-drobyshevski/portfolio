const Bar = ({ style }: { style?: string }) => {
  return (
    <div
      className={`h-1.5 w-4 border-b-2 border-neutral-500 ${
        style ? style : ''
      }`}
    ></div>
  );
};

export default Bar;
