const Header = () => {
  return (
    <header className="col-span-full flex h-16 items-center justify-between">
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
