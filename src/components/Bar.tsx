const Bar = ({
  style,
  h,
  w,
}: {
  style?: string;
  h: number | 'full' | 'auto';
  w: number | 'full' | 'auto';
}) => {
  return (
    <div
      className={`h-${h} w-${w} rounded border border-neutral-500 ${
        style ? style : ''
      }`}
    ></div>
  );
};

export default Bar;
