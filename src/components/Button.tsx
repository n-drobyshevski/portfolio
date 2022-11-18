const Button = ({
  type,
  children,
}: {
  type: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}) => {
  return (
    <button
      className="text-s active: active: active: text-blue-500[.87] inline-block  
      w-full rounded-full border border-blue-500 px-6 py-2.5 font-medium uppercase leading-tight
       text-blue-500/[.87]
       shadow-md outline-none transition duration-150 ease-in-out hover:border-transparent 
       hover:bg-blue-500 hover:text-black hover:shadow-lg focus:bg-blue-500 focus:text-black focus:shadow-lg focus:ring-0 active:bg-blue-500
        active:shadow-lg"
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
