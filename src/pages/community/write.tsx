export default function Write() {
  return (
    <form className="px-4 py-16">
      <textarea
        className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500 "
        rows={5}
        placeholder="Ask a question!"
      />
      <button className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md shadow-sm text-sm font-medium focus:outline-none ">
        Submit
      </button>
    </form>
  );
}
