interface InputProps {
  label: string;
  name: string;
  [key: string]: any;
  kind: "text" | "phone" | "price";
}

export default function Input({
  label,
  name,
  kind,
  register,
  ...rest
}: InputProps) {
  return (
    <>
      {kind === "text" ? (
        <div>
          <label htmlFor={name} className="text-sm font-medium text-gray-500">
            {label}
          </label>
          <input
            id={name}
            {...register}
            {...rest}
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      ) : null}
      {kind === "phone" ? (
        <div>
          <label htmlFor={name} className="text-sm font-medium text-gray-500">
            {label}
          </label>
          <div className="flex rounded-md shadow-sm ">
            <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
              +82
            </span>
            <input
              id={name}
              {...register}
              {...rest}
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>
      ) : null}
      {kind === "price" ? (
        <div>
          <label htmlFor={name} className="text-sm font-medium text-gray-700">
            {label}
          </label>
          <div className="relative flex items-center rounded-md">
            <div className="absolute left-0 pl-3 flex items-center justify-center">
              <span className="text-gray-500 pointer-events-none">$</span>
            </div>
            <input
              id={name}
              {...register}
              {...rest}
              className="appearance-none w-full px-7 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            />
            <div className="absolute right-0 pr-3 pointer-events-none">
              <span className="text-gray-500">USD</span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
