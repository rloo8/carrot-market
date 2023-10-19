export default function Upload() {
  return (
    <div className="px-4 my-16">
      <div>
        <label className="w-full h-48 flex items-center justify-center border-2 border-dashed rounded-md border-gray-300 hover:border-orange-500 hover:text-orange-500 cursor-pointer">
          <svg
            className="h-12 w-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input className="hidden" type="file" />
        </label>
      </div>

      <div className="my-5">
        <label className="text-sm font-medium text-gray-700" htmlFor="price">
          Price
        </label>
        <div className="relative flex items-center rounded-md shadow-md">
          <div className="absolute left-0 pl-3 flex items-center justify-center">
            <span className="text-gray-500 pointer-events-none">$</span>
          </div>
          <input
            className="appearance-none w-full px-7 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            id="price"
            type="text"
            placeholder="0.00"
          />
          <div className="absolute right-0 pr-3 pointer-events-none">
            <span className="text-gray-500">USD</span>
          </div>
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Description</label>
        <div>
          <textarea
            className="mt-1 shadow-sm w-full border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            rows={4}
          />
        </div>
      </div>

      <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm font-medium focus:outline-none">
        Upload product
      </button>
    </div>
  );
}
