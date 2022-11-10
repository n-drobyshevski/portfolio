import Bar from './Bar';

const MenuItem = ({
  isCurrent = false,
  name,
}: {
  isCurrent?: boolean;
  name: string;
}) => {
  return (
    <div
      className={` ${isCurrent ? ' text-neutral-400 ' : 'text-neutral-500'}`}
    >
      {name}
    </div>
  );
};
const Sidebar = ({ currentSectionName }: { currentSectionName: string }) => {
  type menuItemName = 'home' | 'about' | 'skills' | 'projects' | 'contact';
  const items: menuItemName[] = [
    'home',
    'about',
    'skills',
    'projects',
    'contact',
  ];
  let before: menuItemName[] = [];
  let after: menuItemName[] = [];
  const currentItemIndex: number = items.findIndex(
    (item) => item == currentSectionName
  );
  const currentItemName: menuItemName | undefined = items[currentItemIndex];
  if (typeof currentItemName !== 'undefined') {
    for (let i = 0; i < items.length; i++) {
      if (items[i] == currentItemName) {
        before = items.slice(0, currentItemIndex);
        after = items.slice(currentItemIndex + 1, -1);
      }
    }
    return (
      <div className="absolute bottom-0 right-0 flex h-5/6 flex-col items-end gap-4">
        {before
          ? before.map((item) => <MenuItem key={item} name={item} />)
          : ''}
        <MenuItem name={currentItemName} isCurrent={true} />
        <Bar w={0} h="auto" style="grow" />
        {after ? after.map((item) => <MenuItem key={item} name={item} />) : ''}
      </div>
    );
  } else {
    return <div>error</div>;
  }
};

export default Sidebar;
