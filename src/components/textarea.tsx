interface TextAreaProps {
  label?: string;
  name?: string;
  rows: number;
  placeholder?: string;
  [key: string]: any;
}

export default function Textarea({
  label,
  name,
  rows,
  placeholder,
  ...rest
}: TextAreaProps) {
  return (
    <div>
      {label ? (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      ) : null}
      <textarea
        id={name}
        className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500 "
        rows={rows}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
}
