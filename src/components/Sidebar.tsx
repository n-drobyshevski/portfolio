type menuItemName = 'home' | 'about' | 'skills' | 'projects' | 'contact';

type MenuItemProps = { isCurrent: boolean; name: menuItemName };
const MenuItem = ({ isCurrent = false, name }: MenuItemProps) => {
  return (
    <div
      className={`text-sm uppercase ${
        isCurrent ? ' text-blue-400 ' : 'text-neutral-500'
      }`}
    >
      {name}
    </div>
  );
};
const Sidebar = ({ currentSection }: { currentSection: menuItemName }) => {
  const menuItems: menuItemName[] = [
    'home',
    'about',
    'skills',
    'projects',
    'contact',
  ];
  return (
    <div className="flex h-full flex-col items-end justify-center gap-4">
      {menuItems.map((name) => {
        const isCurrent = name === currentSection;
        return <MenuItem key={name} name={name} isCurrent={isCurrent} />;
      })}
    </div>
  );
};

export default Sidebar;
