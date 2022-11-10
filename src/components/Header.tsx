const Header = () => {
  return (
    <header className="flex h-16 w-full items-center justify-between">
      <p className="text-neutral-500">username@email.com</p>
      <div className=" flex justify-between gap-3 text-neutral-300">
        <p>Git</p>
        <p>Tw</p>
        <p>Ln</p>
        <p>Tg</p>
      </div>
    </header>
  );
};

export default Header;
