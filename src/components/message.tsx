function cls(...classnames: string[]) {
  return classnames.join(" ");
}

interface MessageProps {
  message: string;
  IsReversed?: boolean;
}

export default function Message({ message, IsReversed }: MessageProps) {
  return (
    <div
      className={cls(
        "flex items-center gap-2",
        IsReversed ? "flex-row-reverse" : ""
      )}
    >
      <div className="w-8 h-8 rounded-full bg-slate-400" />
      <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md">
        <p>{message}</p>
      </div>
    </div>
  );
}
