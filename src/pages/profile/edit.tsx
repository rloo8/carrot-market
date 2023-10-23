import Button from "@/components/button";
import Input from "@/components/input";
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

        <Input
          kind="text"
          label="Email address"
          name="email"
          type="email"
          required
        />
        <Input
          kind="phone"
          label="Phone number"
          name="phone"
          type="number"
          required
        />

        <Button text="Update Profile" />
      </div>
    </Layout>
  );
}
