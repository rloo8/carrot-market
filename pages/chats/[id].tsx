export default function ChatDetail() {
  return (
    <div className="py-16 px-4 space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md">
          <p>Hi how much are you selling them for?</p>
        </div>
      </div>

      <div className="flex flex-row-reverse items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md">
          <p>I want ￦20,000</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md">
          <p>미쳤어</p>
        </div>
      </div>

      <div className="fixed bottom-4     left-0 right-0 mx-auto w-full max-w-md ">
        <div className="relative flex items-center">
          <input
            type="text"
            className="pr-12 shadow-sm rounded-full w-full border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
          <div className="absolute pr-2 right-0">
            <span className="flex items-center bg-orange-500 hover:bg-orange-600 rounded-full px-2 text-white font-medium cursor-pointer">
              &rarr;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
