type InputProps = {
  inputName: string;
  type: string;
  placeholder?: string;
  textarea?: true;
  fill?: true;
};

const Input = ({
  inputName,
  type,
  textarea,
  fill,
  placeholder,
}: InputProps) => {
  let res_input: JSX.Element;
  res_input = (
    <input
      className="mt-1 w-full appearance-none rounded-md border bg-neutral-100/5 px-3 
      py-2 text-sm text-neutral-100/[.87] outline-none transition-all duration-150 ease-out
       focus:border-neutral-100/75 focus:bg-neutral-100/[.12] focus:ring-transparent"
      id={inputName}
      type={type}
      placeholder={placeholder}
    />
  );
  if (textarea) {
    res_input = (
      <textarea
        className="mt-1 w-full grow resize-none appearance-none rounded-md border bg-neutral-100/5 p-4 px-3 py-2 
        text-sm text-neutral-100/[.87] outline-none transition-all
        duration-150 ease-out focus:border-neutral-100/50 focus:bg-neutral-100/[.12] focus:ring-0"
        placeholder={placeholder}
      ></textarea>
    );
  }
  return (
    <div className={`flex flex-col bg-neutral-900 ${fill ? 'grow' : 'grow-0'}`}>
      <label className="block capitalize text-neutral-100/[.60]">
        {inputName}:
      </label>
      {res_input}
    </div>
  );
};

export default Input;
