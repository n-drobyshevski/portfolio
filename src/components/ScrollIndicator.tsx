const Bar = () => {
  return (
    <div className="h-1.5 w-4 grow-0 border-b-2 border-neutral-500 "></div>
  );
};

type ScrollIndicatorProps = { top: boolean; bottom: boolean };
const ScrollIndicator = ({ top, bottom }: ScrollIndicatorProps) => {
  return (
    <div className="absolute bottom-0 left-2 flex origin-left -rotate-90 items-center gap-4">
      {bottom ? <Bar /> : ""}
      <p className="text-neutral-500">Scroll</p>
      {top ? <Bar /> : ""}
    </div>
  );
};
export default ScrollIndicator;
