import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-slate-400 py-20 px-20 grid gap-10 min-h-screen">
      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$50</span>
        </div>
        <button
          className="block mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-2/3 mx-auto
          hover:bg-teal-500 hover:text-black
          active:bg-yellow-500 focus:bg-red-500
        "
        >
          ChectOut
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 relative -top-5 bg-white">
          <div className="flex relative -top-16 justify-between items-end">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-semibold">340</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-semibold">$340</span>
            </div>
          </div>
          <div className="flex flex-col items-center relative -mt-10 -mb-5">
            <span className="text-lg font-semibold">Yony Molloy</span>
            <span className="text-sm text-gray-500">New York</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <div className="flex justify-between items-center mb-5">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>⭐️4.9</span>
            <span className="shadow-lg p-2 rounded-md">💖</span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="bg-zinc-400 h-72 mb-5" />
          <span className="font-semibold text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-2 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500" />
              <button className="w-5 h-5 rounded-full bg-indigo-500" />
              <button className="w-5 h-5 rounded-full bg-teal-500" />
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-geay-500 rounded-lg">
                -
              </button>
              <span>1</span>
              <button className="bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-geay-500 rounded-lg">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-2xl">$450</span>
            <span className="bg-blue-500 text-center text-white py-2 px-8 rounded-lg">
              Add to cart
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
