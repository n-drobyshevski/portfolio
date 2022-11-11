import Bar from './Bar';

type ScrollIndicatorProps = { top: boolean; bottom: boolean };
const ScrollIndicator = ({ top, bottom }: ScrollIndicatorProps) => {
  return (
    <div className="absolute -bottom-4 left-3 flex w-32 origin-left -rotate-90 items-center gap-4">
      {bottom ? <Bar style="grow max-w-[1.25rem]" h={0} w={4} /> : ''}
      <p className="mb-1 text-neutral-500">Scroll</p>
      {top ? <Bar style="grow max-w-[1.25rem]" h={0} w={4} /> : ''}
    </div>
  );
};
export default ScrollIndicator;
