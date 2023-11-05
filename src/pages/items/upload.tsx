import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import Textarea from "@/components/textarea";
import useMutation from "@libs/client/useMutation";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Item } from "@prisma/client";
import { useRouter } from "next/router";

interface UploadItemForm {
  name: string;
  price: number;
  description: string;
}

interface UploadItemMutation {
  ok: boolean;
  item: Item;
}

export default function Upload() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<UploadItemForm>();
  const [uploadItem, { IsLoading, data }] =
    useMutation<UploadItemMutation>("/api/items");

  const onVaild = (data: UploadItemForm) => {
    if (IsLoading) return;
    uploadItem(data);
  };

  useEffect(() => {
    if (data?.ok) {
      router.push(`/items/${data.item.id}`);
    }
  }, [data, router]);

  return (
    <Layout title="업로드" canGoBack>
      <form onSubmit={handleSubmit(onVaild)} className="px-4 space-y-5">
        <div>
          <label className="w-full h-48 flex items-center justify-center border-2 border-dashed rounded-md border-gray-300 hover:border-orange-500 hover:text-orange-500 cursor-pointer">
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input className="hidden" type="file" />
          </label>
        </div>

        <Input
          register={register("name", { required: true })}
          kind="text"
          label="Name"
          name="name"
          type="text"
          required
        />
        <Input
          register={register("price", { required: true })}
          kind="price"
          label="Price"
          name="price"
          type="text"
          required
        />
        <Textarea
          register={register("description", { required: true })}
          label={"Description"}
          name="description"
          rows={4}
        />
        <Button text={IsLoading ? "Loading..." : "Upload product"} />
      </form>
    </Layout>
  );
}
