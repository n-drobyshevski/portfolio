import Bar from './Bar';

type ScrollIndicatorProps = { top: boolean; bottom: boolean };
const ScrollIndicator = ({ top, bottom }: ScrollIndicatorProps) => {
  return (
    <div className="absolute bottom-0 left-2 flex origin-left -rotate-90 items-center gap-4">
      {bottom ? <Bar h={0} w={4} /> : ''}
      <p className="mb-1 text-neutral-500">Scroll</p>
      {top ? <Bar h={0} w={4} /> : ''}
    </div>
  );
};
export default ScrollIndicator;
