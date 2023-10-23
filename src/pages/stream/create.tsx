import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import Textarea from "@/components/textarea";

export default function CreateStream() {
  return (
    <Layout title="라이브" canGoBack>
      <div className="space-y-5 px-4">
        <Input kind="text" label="Name" name="name" type="text" required />
        <Input kind="price" label="Price" name="price" type="text" required />
        <Textarea label="Description" name="description" rows={4} />
        <Button text="Go live" />
      </div>
    </Layout>
  );
}
