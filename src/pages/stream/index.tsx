export default function Stream() {
  return (
    <div className="py-16 space-y-4 divide-y-2">
      {[1, 2, 3, 4, 5, 6].map((_, i) => (
        <div key={i} className="pt-4 px-4">
          <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
          <h3 className="font-medium text-gray-700 text-lg mt-2">
            Let's try potatos
          </h3>
        </div>
      ))}

      <button className="fixed bottom-20 right-5 cursor-pointer bg-orange-400 hover:bg-orange-500 transition-colors rounded-full p-4 text-white">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      </button>
    </div>
  );
}
