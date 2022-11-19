import Link from 'next/link';

type MenuItemProps = { isCurrent: boolean; name: string };
const MenuItem = ({ isCurrent = false, name }: MenuItemProps) => {
  return (
    <div
      className={`text-sm uppercase ${
        isCurrent ? ' text-blue-400 ' : 'text-neutral-500'
      }`}
    >
      <Link href={name}>{name}</Link>
    </div>
  );
};
const Sidebar = ({ currentPage: currentPage }: { currentPage: string }) => {
  const menuItems = ['home', 'about', 'skills', 'projects', 'contact'];
  return (
    <div className="flex h-full flex-col items-end justify-center gap-4">
      {menuItems.map((name) => {
        const isCurrent = name === currentPage;
        return <MenuItem key={name} name={name} isCurrent={isCurrent} />;
      })}
    </div>
  );
};

export default Sidebar;
