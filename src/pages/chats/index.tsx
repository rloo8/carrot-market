import Layout from "@/components/layout";
import Link from "next/link";

export default function chat() {
  return (
    <Layout title="채팅" hasTabBar>
      <div className="px-4 divide-y-[1px]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
          <div key={i}>
            <Link href={`/chats/${i}`}>
              <div className="flex items-center gap-3 py-3 cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-slate-300" />
                <div>
                  <p className="text-sm font-semibold text-gray-700">
                    Steve Jebs
                  </p>
                  <p className="text-sm text-gray-500">
                    See you tomorrow in the corner at 2pm!
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}
