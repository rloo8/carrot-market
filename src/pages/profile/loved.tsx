import Item from "@/components/item";
import Layout from "@/components/layout";

export default function Loved() {
  return (
    <Layout title="관심목록" canGoBack>
      <div className="flex flex-col space-y-5">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            key={i}
            id={i}
            title="iPhone 15"
            price={99}
            hearts={1}
            comments={1}
          />
        ))}
      </div>
    </Layout>
  );
}
