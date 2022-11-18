import Bar from './Bar';

const MenuItem = ({
  isCurrent = false,
  name,
}: {
  isCurrent?: boolean;
  name: string;
}) => {
  return (
    <div className={` ${isCurrent ? ' text-blue-400 ' : 'text-neutral-500'}`}>
      {name}
    </div>
  );
};
const Sidebar = ({ currentSectionName }: { currentSectionName: string }) => {
  type menuItemName = 'home' | 'about' | 'skills' | 'projects' | 'contact';
  const menuItems: menuItemName[] = [
    'home',
    'about',
    'skills',
    'projects',
    'contact',
  ];
  let before: menuItemName[] = [];
  let after: menuItemName[] = [];
  const currentItemIndex: number = menuItems.findIndex(
    (item) => item == currentSectionName
  );
  const currentItemName: menuItemName | undefined = menuItems[currentItemIndex];
  if (typeof currentItemName !== 'undefined') {
    for (let i = 0; i < menuItems.length; i++) {
      if (menuItems[i] == currentItemName) {
        before = menuItems.slice(0, currentItemIndex);
        after = menuItems.slice(-(before.length + 1));
      }
    }
    return (
      <div className="flex h-full flex-col items-end gap-4">
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
