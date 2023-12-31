import FloatButton from "@/components/float-button";
import Product from "@/components/item";
import Layout from "@/components/layout";
import useUser from "@libs/client/useUser";
import { Item } from "@prisma/client";
import useSWR from "node_modules/swr/core/dist";

interface ItemWithCount extends Item {
  _count: { Fav: number };
}

interface ItemsResponse {
  ok: boolean;
  items: ItemWithCount[];
}

export default function Home() {
  const { user, isLoading } = useUser();
  const { data } = useSWR<ItemsResponse>("/api/items");
  console.log(data);

  return (
    <Layout title="홈" hasTabBar>
      <div className="flex flex-col space-y-5">
        {data?.items?.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            title={item.name}
            price={item.price}
            hearts={item._count.Fav}
          />
        ))}

        <FloatButton href="/items/upload">
          <svg
            className="h-6 w-6"
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </FloatButton>
      </div>
    </Layout>
  );
}
