import Layout from "@/components/layout";
import Message from "@/components/message";

export default function ChatDetail() {
  return (
    <Layout title="채팅" canGoBack>
      <div className="px-4 space-y-4">
        <Message message="Hi how much are you selling them for?" />
        <Message IsReversed message="I want ￦20,000" />
        <Message message="미쳤어" />

        <div className="fixed bottom-4 left-0 right-0 mx-auto w-full max-w-lg ">
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
    </Layout>
  );
}
