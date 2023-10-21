import Layout from "@/components/layout";

export default function EditProfile() {
  return (
    <Layout title="프로필 수정" canGoBack>
      <div className="px-4 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-slate-400" />
          <label
            htmlFor="photo"
            className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium"
          >
            Change photo
            <input id="photo" type="file" accept="image/*" className="hidden" />
          </label>
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-500">
            Email adress
          </label>
          <input
            id="email"
            type="email"
            required
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="phone" className="text-sm font-medium text-gray-500">
            Phone number
          </label>
          <div className="flex rounded-md shadow-sm ">
            <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
              +82
            </span>
            <input
              id="phone"
              type="number"
              required
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>

        <button className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm font-medium focus:outline-none">
          Update Profile
        </button>
      </div>
    </Layout>
  );
}
