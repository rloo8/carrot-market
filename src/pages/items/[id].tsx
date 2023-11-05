import Button from "@/components/button";
import Layout from "@/components/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function ItemDetail() {
  const router = useRouter();
  const { data } = useSWR(
    router.query.id ? `/api/items/${router.query.id}` : null
  );
  console.log(data);

  return (
    <Layout title="아이템" canGoBack>
      <div className="px-4">
        <div className="mb-8">
          <div className="h-96 bg-slate-300" />

          <div className="flex items-center gap-3 py-3 border-b cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-slate-300" />
            <div>
              <p className="text-sm font-medium text-gray-700">
                {data?.item?.user?.name}
              </p>
              <Link href={`/profile/${data?.item?.user?.id}`}>
                <p className="text-xs font-medium text-gray-500">
                  View profile &rarr;
                </p>
              </Link>
            </div>
          </div>

          <div className="mt-5">
            <h1 className="text-3xl font-bold text-gray-900">
              {data?.item?.name}
            </h1>
            <p className="text-3xl mt-3 text-gray-900">${data?.item?.price}</p>
            <p className="text-base my-6 text-gray-700">
              {data?.item?.description}
            </p>
            <div className="flex items-center justify-between gap-2">
              <Button text="Talk to seller" />
              <button className="p-3 mt-5 flex items-center justify-center text-gray-400 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                <svg
                  className="h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Similar items</h2>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div key={i}>
                <div className="h-56 w-full bg-slate-300 mb-2" />
                <h3 className="text-gray-700">Galaxy S60</h3>
                <p className="text-sm font-semibold text-gray-900">$6</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
