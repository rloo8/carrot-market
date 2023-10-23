import Button from "@/components/button";
import Layout from "@/components/layout";
import Textarea from "@/components/textarea";

export default function Write() {
  return (
    <Layout title="동네생활" canGoBack>
      <form className="px-4">
        <Textarea placeholder="Ask a question!" rows={5} />
        <Button text="Submit" />
      </form>
    </Layout>
  );
}
